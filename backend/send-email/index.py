import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def handler(event: dict, context) -> dict:
    """Отправка обратной связи с сайта Port Mirage на почту portmirage@gmail.com"""
    cors = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
    }

    if event.get('httpMethod') == 'OPTIONS':
        return {'statusCode': 200, 'headers': cors, 'body': ''}

    body = json.loads(event.get('body') or '{}')
    name = body.get('name', '').strip()
    contact = body.get('contact', '').strip()
    message = body.get('message', '').strip()

    if not name or not contact or not message:
        return {
            'statusCode': 400,
            'headers': cors,
            'body': json.dumps({'error': 'Все поля обязательны'}, ensure_ascii=False)
        }

    smtp_host = os.environ.get('SMTP_HOST', 'smtp.yandex.ru')
    smtp_port = int(os.environ.get('SMTP_PORT', '465'))
    smtp_user = os.environ.get('SMTP_USER', '')
    smtp_pass = os.environ.get('SMTP_PASS', '')
    to_email = 'portmirage@gmail.com'

    html = f"""
    <h2 style="color:#222;font-family:Arial,sans-serif;">Новое сообщение с сайта Port Mirage</h2>
    <table style="font-family:Arial,sans-serif;font-size:15px;border-collapse:collapse;">
      <tr><td style="padding:6px 16px 6px 0;color:#888;font-weight:bold;">Имя:</td><td>{name}</td></tr>
      <tr><td style="padding:6px 16px 6px 0;color:#888;font-weight:bold;">Контакт:</td><td>{contact}</td></tr>
      <tr><td style="padding:6px 16px 6px 0;color:#888;font-weight:bold;vertical-align:top;">Сообщение:</td><td>{message.replace(chr(10), '<br>')}</td></tr>
    </table>
    """

    msg = MIMEMultipart('alternative')
    msg['Subject'] = f'Port Mirage — новое сообщение от {name}'
    msg['From'] = smtp_user
    msg['To'] = to_email
    msg.attach(MIMEText(html, 'html', 'utf-8'))

    with smtplib.SMTP_SSL(smtp_host, smtp_port) as server:
        server.login(smtp_user, smtp_pass)
        server.sendmail(smtp_user, to_email, msg.as_string())

    return {
        'statusCode': 200,
        'headers': cors,
        'body': json.dumps({'ok': True})
    }