from flask import Flask, request, render_template

app = Flask(__name__)

@app.route("/", methods=['GET'])
def get_color():
    args = request.args
    color = args.get('color')
    if color == 'white':
        return render_template('index.html')
    elif color == 'blue':
        return render_template('index2.html')