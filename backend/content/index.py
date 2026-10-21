import base64
import hmac
import json
import os
import uuid

import boto3
import psycopg2

SCHEMA = os.environ.get('MAIN_DB_SCHEMA', 't_p76039885_lock_opening_landing')
KEYS = {'hero', 'gallery', 'artists', 'mixes'}

CORS = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, X-User-Id, X-Auth-Token, X-Session-Id',
    'Access-Control-Max-Age': '86400',
}


def resp(status: int, data: dict) -> dict:
    return {
        'statusCode': status,
        'headers': {**CORS, 'Content-Type': 'application/json'},
        'body': json.dumps(data, ensure_ascii=False),
    }


def is_admin(event: dict) -> bool:
    expected = os.environ.get('ADMIN_PASSWORD', '')
    headers = {k.lower(): v for k, v in (event.get('headers') or {}).items()}
    given = headers.get('x-auth-token', '')
    return bool(expected) and hmac.compare_digest(given, expected)


def handler(event: dict, context) -> dict:
    """Контент сайта: публичное чтение (GET) и защищённое редактирование (POST) для админ-панели."""
    if event.get('httpMethod') == 'OPTIONS':
        return {'statusCode': 200, 'headers': CORS, 'body': ''}

    method = event.get('httpMethod')

    if method == 'GET':
        conn = psycopg2.connect(os.environ['DATABASE_URL'])
        cur = conn.cursor()
        cur.execute(f"SELECT key, value FROM {SCHEMA}.site_content")
        rows = cur.fetchall()
        conn.close()
        data = {k: (v if not isinstance(v, str) else json.loads(v)) for k, v in rows}
        return resp(200, data)

    if method == 'POST':
        if not is_admin(event):
            return resp(401, {'error': 'Неверный пароль'})

        body = json.loads(event.get('body') or '{}')
        action = body.get('action')

        if action == 'login':
            return resp(200, {'ok': True})

        if action == 'save':
            key = body.get('key')
            if key not in KEYS:
                return resp(400, {'error': 'Неизвестный раздел'})
            value = json.dumps(body.get('value'), ensure_ascii=False).replace("'", "''")
            conn = psycopg2.connect(os.environ['DATABASE_URL'])
            cur = conn.cursor()
            cur.execute(
                f"INSERT INTO {SCHEMA}.site_content (key, value, updated_at) "
                f"VALUES ('{key}', '{value}'::jsonb, NOW()) "
                f"ON CONFLICT (key) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW()"
            )
            conn.commit()
            conn.close()
            return resp(200, {'ok': True})

        if action == 'upload':
            raw = body.get('data', '')
            if ',' in raw:
                raw = raw.split(',', 1)[1]
            content_type = body.get('contentType', 'image/jpeg')
            ext = {'image/png': 'png', 'image/webp': 'webp', 'image/jpeg': 'jpg'}.get(content_type, 'jpg')
            name = f"{uuid.uuid4()}.{ext}"
            s3 = boto3.client(
                's3',
                endpoint_url='https://bucket.poehali.dev',
                aws_access_key_id=os.environ['AWS_ACCESS_KEY_ID'],
                aws_secret_access_key=os.environ['AWS_SECRET_ACCESS_KEY'],
            )
            s3.put_object(Bucket='files', Key=f"uploads/{name}", Body=base64.b64decode(raw), ContentType=content_type)
            url = f"https://cdn.poehali.dev/projects/{os.environ['AWS_ACCESS_KEY_ID']}/bucket/uploads/{name}"
            return resp(200, {'url': url})

        return resp(400, {'error': 'Неизвестное действие'})

    return resp(405, {'error': 'Method not allowed'})
