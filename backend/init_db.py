
from app import app
from psql_db import db

with app.app_context():
    db.create_all()
    print("Database tables created!")
