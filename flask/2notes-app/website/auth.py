from flask import Blueprint, render_template, request, flash, redirect, url_for
from .models import User
from . import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import login_user, login_required, logout_user, current_user

auth = Blueprint('auth', __name__)

# login page
@auth.route('/login', methods=['GET', 'POST'])
def login():
    # query database to find user with matching email+password
    if request.method == 'POST':
        email = request.form.get('email')
        password = request.form.get('password')

        user = User.query.filter_by(email=email).first()
        if user:
            if check_password_hash(user.password, password):
                flash('Logged in successfully!', category="success")
                login_user(user, remember=True)
                return redirect(url_for('views.home'))
            else:
                flash('Incorrect password! try again', category="error")
        else:
            flash('Email does not exist!', category="error")


    return render_template("login.html", user=current_user)

# logout page
@auth.route('/logout')
@login_required # cannot access logout route unless logged in
def logout():
    logout_user()
    return redirect(url_for('auth.login'))

# signup page 
@auth.route('/sign-up', methods=['GET', 'POST'])
def sign_up():
    # get submitted form data, do some logic operations on it for validity
    if request.method == 'POST':
        email = request.form.get('email')
        firstName = request.form.get('firstName')
        password1 = request.form.get('password1')
        password2 = request.form.get('password2')

        # check for user exists in database
        user = User.query.filter_by(email=email).first()
        if user:
            flash('User already exists! proceed to login page', category="error")

        elif len(email) < 4:
            flash('Email must be greater than 3 characters.', category='error')
        elif len(firstName) < 2:
            flash('First name must be greater than 1 character.', category='error')
        elif password1 != password2:
            flash('Passwords dont match.', category='error')
        elif len(password1) < 7:
            flash('Password must be at least 7 characters.', category='error')
        else:
            # if all fields valid, add user into database and redirect to login page
            new_user = User(email=email, first_name=firstName, password=generate_password_hash(password1, method='sha256'))
            db.session.add(new_user)
            db.session.commit()
            flash('Account created!', category='success')
            return redirect(url_for('auth.login')) # return redirect("/login")


    return render_template("sign_up.html", user=current_user)
