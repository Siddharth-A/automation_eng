# create website dir
# create website/static & website/template dir
# create:- 
# main.py       : main file
# __init.py__   : turns the website dir into package
# auth.py       : contains authentication info
# views.py      : contains frontend 
# models.py     : contains database model

# cd website
# pip install flask
# pip install flask-login
# pip install flask-sqlalchemy
# cd ../
# export PYTHONPATH=.
# python3 website/main.py


from website import create_app

app = create_app()
if __name__ == '__main__': #only run app.run if filename is main.py
    app.run(debug=True)
