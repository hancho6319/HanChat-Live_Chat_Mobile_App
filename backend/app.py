from flask import Flask, render_template,jsonify, url_for, request, redirect
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS  # Import CORS
import datetime

app = Flask(__name__)

# Configuring the MySQL database connection
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:JKX#3aZ441vid@localhost/hanchat'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

CORS(app)  # Enable CORS for all routes

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    phone_number = db.Column(db.String(15), unique=True, nullable=False)
    first_name = db.Column(db.String(50), nullable=False)
    last_name = db.Column(db.String(50), nullable=False)
    date = db.Column(db.DateTime, default = datetime.datetime.now)
    password = db.Column(db.String(128), nullable=False)

    def __repr__(self):
        return f'<User {self.username}>'

# Signup Route
@app.route('/signup', methods=['POST'])
def signup():
    data = request.json
    phone_number = data.get('phoneNumber')
    username = data.get('username')
    first_name = data.get('firstName')
    last_name = data.get('lastName')
    password = data.get('password1')

    # Check if all fields are provided
    if not all([username, phone_number, first_name, last_name, password]):
        return jsonify({'error': 'All fields are required'}), 400
    
    # Check if phone number or username is already in use
    if User.query.filter_by(phone_number=phone_number).first():
        return jsonify({'error': 'Phone number already in use'}), 409
    if User.query.filter_by(username=username).first():
        return jsonify({'error': 'Username already in use'}), 409

    # Create and save new user
    new_user = User(username=username, phone_number=phone_number, first_name=first_name, last_name=last_name, password=password)
    db.session.add(new_user)
    db.session.commit()

    return jsonify({'message': 'User registered successfully'}), 201

# # Defining models
# class Articles(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     username = db.Column(db.String(80), unique=True, nullable=False)
#     phone_number = db.Column(db.String(15), unique=True, nullable=False)
#     first_name = db.Column(db.String(50), nullable=False)
#     last_name = db.Column(db.String(50), nullable=False)
#     date = db.Column(db.DateTime, default = datetime.datetime.now)
#     password = db.Column(db.String(128), nullable=False)

#     def __init__(self, id, username, phone_number, first_name, last_name, password):
#         self.id = id
#         self.username,
#         self.phone_number,
#         self.first_name,
#         self.last_name,
#         self.password


@app.route("/")
@app.route("/home")
def home():
	return render_template("home.html")

@app.route("/register", )
def index():
    return render_template('signup.html')

# @app.route("/register", methods=['GET', 'POST'])
# def register():
# 	return render_template("register.html")

# @app.route("/login",  methods=['GET', 'POST'])
# def login():
# 	return render_template("login.html")

# # Create tables
# with app.app_context():
#     db.create_all()

# # Route to create a new user
# @app.route('/users', methods=['POST'])
# def create_user():
#     data = request.get_json()
    
#     # Ensure all required fields are provided
#     if not all(field in data for field in ['username', 'email', 'phone_number', 'first_name', 'last_name', 'password']):
#         return jsonify({"error": "Missing required fields"}), 400

#     new_user = User(
#         username=data['username'], 
#         email=data['email'],
#         phone_number=data['phone_number'],
#         first_name=data['first_name'],
#         last_name=data['last_name'],
#         password=data['password']  # Assuming you're hashing the password somewhere else in the code
#     )
    
#     db.session.add(new_user)
#     db.session.commit()
    
#     # Return the user data as a response
#     return jsonify({
#         "id": new_user.id,
#         "username": new_user.username,
#         "phone_number": new_user.phone_number,
#         "first_name": new_user.first_name,
#         "last_name": new_user.last_name,
#         "email": new_user.email,
#         "password": new_user.password  # Be cautious with returning passwords directly
#     }), 201

# # Route to get all users
# @app.route('/users', methods=['GET'])
# def get_users():
#     users = User.query.all()
#     return jsonify([user.to_dict() for user in users])

# # Route to get a single user by ID
# @app.route('/users/<int:user_id>', methods=['GET'])
# def get_user(user_id):
#     user = User.query.get_or_404(user_id)
#     return jsonify(user.to_dict())

# # Route to update a user
# @app.route('/users/<int:user_id>', methods=['PUT'])
# def update_user(user_id):
#     data = request.get_json()
#     user = User.query.get_or_404(user_id)
#     user.username = data.get('username', user.username)
#     user.email = data.get('email', user.email)
#     db.session.commit()
#     return jsonify(user.to_dict())

# # Route to delete a user
# @app.route('/users/<int:user_id>', methods=['DELETE'])
# def delete_user(user_id):
#     user = User.query.get_or_404(user_id)
#     db.session.delete(user)
#     db.session.commit()
#     return '', 204

if __name__ == '__main__':
    app.run(debug=True)