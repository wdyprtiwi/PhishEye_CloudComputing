const mysql = require('mysql2')

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'phisheyev2'
})

db.connect((err) => {
  if (err) {
    console.error('Failed to connect to the database')
    return
  }
  console.log('Connected to database')
})

module.exports = db
