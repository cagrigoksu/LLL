
from backend.app import app
from backend.db import db

with app.app_context():
    db.create_all()
    print("Database tables created!")
