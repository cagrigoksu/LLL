
from backend.app import db

class Verb(db.Model):
    __tablename__ = "verbs"
    
    id = db.Column(db.Integer, primary_key = True)
    is_regular = db.Column(db.Boolean, nullable = False)
    is_seperable = db.Column(db.Boolean, nullable = False)
    verb = db.Column(db.String, nullable = False)
    meaning = db.Column(db.String, nullable = False)
    sing1 = db.Column(db.String)
    sing2 = db.Column(db.String)
    sing3 = db.Column(db.String)
    plur1 = db.Column(db.String)
    plur2 = db.Column(db.String)
    plur3 = db.Column(db.String)