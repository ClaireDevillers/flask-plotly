# rappel: lancer avec: flask --app server run --debug
# ou: flask --app server run --host=0.0.0.0 --debug
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from markupsafe import escape
from flask import render_template
from flask import abort, redirect, url_for
from flask import request, session

db = SQLAlchemy()
app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///project.db"
db.init_app(app)

class Client(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String, unique=True, nullable=False)
    email = db.Column(db.String)
         
with app.app_context():
    db.create_all()

@app.route("/")
def index():
    clients = db.session.execute(db.select(Client).order_by(Client.username)).scalars()
    return render_template('index.html', clients=clients)

@app.route("/utilisation/<int:client>")
def utilisation(client=None):
    client = db.session.query(Client).get(1)
    return render_template('utilisation.html',client=client)

@app.get('/populate')
def create_users_in_db():
        for i in range(1,5):
            client = Client(
                username=f"claire{i}",
                email=f"clairedevillersca+{i}@gmail.com",
            )
            db.session.add(client)
            db.session.commit()
        return redirect(url_for("index"))  