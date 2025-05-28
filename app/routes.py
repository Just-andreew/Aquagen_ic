from flask import Blueprint, render_template, jsonify

main = Blueprint('main', __name__)

# Dashboard route
@main.route('/')
def index():
    return render_template('index.html')

# Mock inventory API
@main.route('/api/inventory')
def inventory():
    data = [
        {"type": "Tilapia", "count": 3400, "tank": "A1"},
        {"type": "Catfish", "count": 2800, "tank": "B2"},
        {"type": "Trout", "count": 1250, "tank": "C3"}
    ]
    return jsonify(data)

# Mock tasks API
@main.route('/api/tasks')
def tasks():
    data = [
        {"id": 1, "task": "Feed fish", "status": "pending"},
        {"id": 2, "task": "Clean tanks", "status": "done"},
        {"id": 3, "task": "Harvest batch B", "status": "in progress"}
    ]
    return jsonify(data)
