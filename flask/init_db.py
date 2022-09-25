import sqlite3
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

# Check a single account by screen name
result = bom.check_account('@BU_Tweets')

connection = sqlite3.connect('database.db')


with open('data.sql') as f:
    connection.executescript(f.read())

cur = connection.cursor()

cur.execute("INSERT INTO posts (title, content) VALUES (?, ?)",
            ('@BU_Tweets', 'score: ' + str(result['display_scores']['universal']['overall']))
            )

cur.execute("INSERT INTO posts (title, content) VALUES (?, ?)",
            ('Second Post', 'Content for the second post')
            )

connection.commit()
connection.close()