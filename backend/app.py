# app.py
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from dotenv import load_dotenv
import os

# Load .env file
load_dotenv()

# Set up Flask app
app = Flask(__name__)

# Database config from .env
DB_USER = os.getenv("DB_USER")
DB_PASSWORD = os.getenv("DB_PASSWORD")
DB_HOST = os.getenv("DB_HOST")
DB_PORT = os.getenv("DB_PORT")
DB_NAME = os.getenv("DB_NAME")

app.config["SQLALCHEMY_DATABASE_URI"] = (
    f"postgresql://{DB_USER}:{DB_PASSWORD}@{DB_HOST}:{DB_PORT}/{DB_NAME}"
)
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

# Set up SQLAlchemy
db = SQLAlchemy(app)

# Example model
class Noun(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    word = db.Column(db.String(100), nullable=False)
    gender = db.Column(db.String(10))
    article = db.Column(db.String(10))
    translation = db.Column(db.String(100))

@app.route("/")
def index():
    return "Luxembourgish Language App API Running!"

if __name__ == "__main__":
    app.run(debug=True)
