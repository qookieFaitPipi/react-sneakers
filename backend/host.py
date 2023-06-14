from flask import *
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

from werkzeug.security import generate_password_hash, check_password_hash


host = Flask(__name__)
host.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
db = SQLAlchemy(host)
CORS(host)

class Sneakers(db.Model):
  id = db.Column(db.Integer, primary_key=True)
  key = db.Column(db.Integer, nullable=False)
  title = db.Column(db.String(100), nullable=False)
  price = db.Column(db.Integer, nullable=False)
  imageURL = db.Column(db.String(100), nullable=False)

class CartSneakers(db.Model):
  id = db.Column(db.Integer, primary_key=True)
  key = db.Column(db.Integer, nullable=False)
  title = db.Column(db.String(100), nullable=False)
  price = db.Column(db.Integer, nullable=False)
  imageURL = db.Column(db.String(100), nullable=False)

class SelectSneakers(db.Model):
  id = db.Column(db.Integer, primary_key=True)
  key = db.Column(db.Integer, nullable=False)
  title = db.Column(db.String(100), nullable=False)
  price = db.Column(db.Integer, nullable=False)
  imageURL = db.Column(db.String(100), nullable=False)

class User(db.Model):
  id = db.Column(db.Integer, primary_key=True)
  login = db.Column(db.String(100), nullable=False)
  password = db.Column(db.String(100), nullable=False)


@host.route('/get_sneakers')
def get_sneakers():
  items = Sneakers.query.order_by(Sneakers.id).all()
  items = list(map(lambda el: {'id': el.id, 'key': el.key, 'title': el.title, 'price': el.price, 'imageURL': 'http://0.0.0.0:5000/' + el.imageURL}, items))
  return jsonify(items)

@host.route('/add_sneakers_to_select', methods=["POST"])
def add_sneakers_to_select():
  data = request.get_json()

  item = CartSneakers(key=data['key'], title=data['title'], price=data['price'], imageURL=data['imageURL'])
  try:
    db.session.add(item)
    db.session.commit()
    return jsonify({"is_added": True})

  except:
    return jsonify({"is_added": False})
  
@host.route('/delete_sneakers_from_select/<key>', methods=["POST"])
def remove_sneakers_from_select(key):
  item = CartSneakers.query.filter_by(key=key).first()

  try:
    db.session.delete(item)
    db.session.commit()
    return jsonify({"is_deleted": True})

  except:
    return jsonify({"is_deleted": False})

@host.route('/add_sneakers_to_cart', methods=["POST"])
def add_sneakers_to_cart():
  data = request.get_json()

  item = SelectSneakers(key=data['key'], title=data['title'], price=data['price'], imageURL=data['imageURL'])
  try:
    db.session.add(item)
    db.session.commit()
    return jsonify({"is_added": True})

  except:
    return jsonify({"is_added": False})

@host.route('/delete_sneakers_from_cart/<key>', methods=["POST"])
def remove_sneakers_from_cart(key):
  item = SelectSneakers.query.filter_by(key=key).first()

  try:
    db.session.delete(item)
    db.session.commit()
    return jsonify({"is_deleted": True})

  except:
    return jsonify({"is_deleted": False})


@host.route('/images/sneakers/<pic>')
def getImage(pic):
  return send_file('static/images/sneakers/' + pic, as_attachment=True)


@host.route('/register', methods=["POST"])
def register():
  data = request.get_json()

  tmpItem = User.query.filter_by(login=data['login']).first()

  if tmpItem:
    return jsonify({"is_registered": False}) 

  hash = generate_password_hash(data['password'])

  item = User(login=data['login'], password=hash)

  try:
    db.session.add(item)
    db.session.commit()
    return jsonify({"is_registered": True})

  except:
    return jsonify({"is_registered": False})

@host.route('/entry', methods=["POST"])
def entry():
  data = request.get_json()

  item = User.query.filter_by(login=data['login']).first()

  if not item:
    return jsonify({"is_entered": False})
  
  if check_password_hash(item.password, data['password']):
    return jsonify({"is_entered": True, "userLogin": data['login']})
  else:
    return jsonify({"is_entered": False})


if __name__ == "__main__":
  host.run(host="0.0.0.0", debug=True)
