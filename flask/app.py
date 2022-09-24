import sqlite3
from flask import Flask, render_template, request, url_for, flash, redirect
from werkzeug.exceptions import abort
import sys
sys.path.insert(0, '/Users/biyihe/Documents/ec463/botometer-python')
import botometer
import sqlite3

rapidapi_key = "e42d43c35emsh29a2e97be3b0fc4p1acbc4jsn1b9a8ca2d2c9"
twitter_app_auth = {
    'consumer_key': 'TmBOkVLtmlInsN3mIvwtuM2Fe',
    'consumer_secret': 'HTb9NVgt4ZySucfEQ6Ir5Z3yfGfqjqzkC7HJtgqeBALKUplX4O',
    #'access_token': 'xxxxxxxxx',
    #'access_token_secret': 'xxxxxxxxxxx',
}
bom = botometer.Botometer(wait_on_ratelimit=True,
                        rapidapi_key=rapidapi_key,
                        **twitter_app_auth)


def get_db_connection():
    conn = sqlite3.connect('database.db')
    conn.row_factory = sqlite3.Row
    return conn

def get_post(post_id):
    conn = get_db_connection()
    post = conn.execute('SELECT * FROM posts WHERE id = ?',
                        (post_id,)).fetchone()
    conn.close()
    if post is None:
        abort(404)
    return post

app = Flask(__name__)
app.config['SECRET_KEY'] = 'EC463!'

@app.route('/')
def index():

    conn = get_db_connection()
    tweets = conn.execute('SELECT * FROM posts').fetchall()
    conn.close()

    return render_template('index.html', tweets=tweets)


@app.route('/<int:post_id>')
def post(post_id):
    post = get_post(post_id)
    return render_template('post.html', post=post)

@app.route('/create', methods=('GET', 'POST'))
def create():
    if request.method == 'POST':
        title = request.form['title']
        result = bom.check_account(title)
        content = str(result['display_scores']['universal']['overall'])

        if not title:
            flash('Please enter a user name')
        else:
            conn = get_db_connection()
            conn.execute('INSERT INTO posts (title, content) VALUES (?, ?)',
                         (title, content))
            conn.commit()
            conn.close()
            return redirect(url_for('index'))

    return render_template('create.html')

@app.route('/<int:id>/edit', methods=('GET', 'POST'))
def edit(id):
    post = get_post(id)

    if request.method == 'POST':
        title = request.form['title']
        content = request.form['content']

        if not title:
            flash('Title is required!')
        else:
            conn = get_db_connection()
            conn.execute('UPDATE tweet SET title = ?, content = ?'
                         ' WHERE id = ?',
                         (title, content, id))
            conn.commit()
            conn.close()
            return redirect(url_for('index'))

    return render_template('edit.html', post=post)

@app.route('/<int:id>/delete', methods=('POST',))
def delete(id):
    post = get_post(id)
    conn = get_db_connection()
    conn.execute('DELETE FROM tweet WHERE id = ?', (id,))
    conn.commit()
    conn.close()
    flash('"{}" was successfully deleted!'.format(post['title']))
    return redirect(url_for('index'))