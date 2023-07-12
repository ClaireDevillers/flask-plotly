# lancer: flask --app server run --debug
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

@app.get('/populate')
def create_users():
        for i in range(1,5):
            client = Client(
                username=f"claire{i}",
                email=f"clairedevillersca+{i}@gmail.com",
            )
            db.session.add(client)
            db.session.commit()
        return redirect(url_for("index"))  

@app.route("/")
def index():
    clients = db.session.execute(db.select(Client).order_by(Client.username)).scalars()
    return render_template('index.html', clients=clients)

@app.route("/utilisation/<int:client>")
def utilisation(client=None):
    client = db.session.query(Client).get(1)
    return render_template('utilisation.html',client=client)

# sample routes
# @app.route('/2')
# def index2():
#     return redirect(url_for('bad_login'))

# @app.route('/badlogin')
# def bad_login():
#     abort(401)
#     this_is_never_executed()

# @app.route('/hello/')
# @app.route('/hello/<name>')
# def hello(name=None):
#     return render_template('hello.html', name=name)

# @app.route('/user/<username>')
# def show_user_profile(username):
#     # show the user profile for that user
#     return f'User {escape(username)}'

# @app.route('/post/<int:post_id>')
# def show_post(post_id):
#     # show the post with the given id, the id is an integer
#     return f'Post {post_id}'

# @app.route('/path/<path:subpath>')
# def show_subpath(subpath):
#     # show the subpath after /path/
#     return f'Subpath {escape(subpath)}'

# @app.route("/me")
# def me_api():
#     user = {"username":"claire","theme":"","image":""}
#     return {
#         "username": user["username"],
#         "theme": user["theme"],
#         #"image": url_for("user_image", filename=user.image),
#     }


# @app.route("/users")
# def user_list():
#     users = db.session.execute(db.select(User).order_by(User.username)).scalars()
#     for user in users:
#          print(user.username)
#     return "hello welcome to wpo.eu"
    #return users
    #return [user.to_json() for user in users]

# app.secret_key = b'_5#y2L"F4Q8z\n\xec]/'

# @app.route('/')
# def index():
#     if 'username' in session:
#         return f'Logged in as {session["username"]}'
#     return 'You are not logged in'

# @app.route('/login', methods=['GET', 'POST'])
# def login():
#     if request.method == 'POST':
#         session['username'] = request.form['username']
#         return redirect(url_for('index'))
#     return '''
#         <form method="post">
#             <p><input type=text name=username>
#             <p><input type=submit value=Login>
#         </form>
#     '''

# @app.route('/logout')
# def logout():
#     # remove the username from the session if it's there
#     session.pop('username', None)
#     return redirect(url_for('index'))