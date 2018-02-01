from flask import Flask,render_template,redirect,url_for
from start import storage

app = Flask(__name__)

@app.route("/")
def main():
    return render_template("index.html", title="Главня страница")

@app.route("/lesson")
def lessons():
    d = storage.get_all()
    return render_template("lessons.html", title="Уроки", data=d)

@app.route("/lesson/<id>")
def lesson(id):
    d = storage.get(str(id))
    d2 = storage.get_all()
    if not d:
        return redirect(url_for('error404'))
    else:
        return render_template("codepage.html", title="Урок", data=d, data2=d2)

@app.route('/404')
def error404():
    return render_template("404.html")

@app.route('/support')
def support():
    return render_template("support.html")