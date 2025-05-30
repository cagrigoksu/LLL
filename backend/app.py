import os
from flask import Flask
from dotenv import load_dotenv
from psql_db import db  # use the db from __init__.py

# load .env file
load_dotenv()

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv("DATABASE_URL")
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)

from models.nouns_model import Noun
from models.verbs_model import Verb

@app.route('/')
def index():
    return "Luxembourgish Learning API is working!"

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
