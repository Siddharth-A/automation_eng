##basic cmds to setup
#virtualenv env
#pip3 install flask flask-sqlalchemy
#python3 app.py
#go to link

##cmds to init db
#import db in code
#create db.Modelin code
#source /env/bin/activate
#start python3 in terminal
#rom app import app, db
#app.app_context().push()
#db.create_all()

from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db'
db = SQLAlchemy(app)

class Todo (db.Model):
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.String(200), nullable=False)
    completed = db.Column(db.Integer, default=0)
    data_created = db.Column(db.DateTime, default=datetime.utcnow)

    def __repr__(self):
        return '<Task %I' %self.id

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == "__main__":
        app.run(debug=True)