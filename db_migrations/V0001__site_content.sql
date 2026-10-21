CREATE TABLE IF NOT EXISTS t_p76039885_lock_opening_landing.site_content (
  key TEXT PRIMARY KEY,
  value JSONB NOT NULL,
  updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);