from flask import Blueprint

auth = Blueprint('auth', __name__)

# login page
@auth.route('/login')
def login():
    return "<p> Login <p>"

# logout page
@auth.route('/logout')
def logout():
    return "<p> Logout <p>"

@auth.route('/sign-up')
def sign_up():
    return "<p> Sign-up <p>"
