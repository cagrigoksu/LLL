
from backend.db import db
import enum

class GenderEnum(enum.Enum):
    feminine = 0
    masculine = 1
    neuter = 2

class Noun(db.Model):
    __tablename__ = 'nouns'

    id = db.Column(db.Integer, primary_key=True)
    gender = db.Column(db.Enum(GenderEnum), nullable=False)
    noun = db.Column(db.String, nullable=False)
    meaning = db.Column(db.String, nullable=False)
    article_def_acc = db.Column(db.String)
    article_def_dat = db.Column(db.String)
    article_indef_acc = db.Column(db.String)
    article_indef_dat = db.Column(db.String)
    singular = db.Column(db.String)
    plural = db.Column(db.String)