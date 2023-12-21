const db = require('./dbConnection')
const jwt = require('jsonwebtoken')
const uuid = require('uuid')

// Register a new user
const signup = (req, res) => {
  const { name, email, password } = req.body

  // Validate password length
  if (!password || password.length < 8) {
    return res.json({ error: true, message: 'Password must be at least 8 characters' })
  }

  const userId = 'user-' + uuid.v4() // Generate unique userId

  const query = 'INSERT INTO users (userId, name, email, password) VALUES (?, ?, ?, ?)'

  db.query(query, [userId, name, email, password], (err, result) => {
    if (err) {
      console.error('Error registering user: ' + err.message)
      res.json({ error: true, message: 'Registration failed' })
    } else {
      res.json({ error: false, message: 'User created' })
    }
  })
}

// Login with existing user
const login = (req, res) => {
  const { email, password } = req.body
  const query = 'SELECT * FROM users WHERE email = ? AND password = ?'

  db.query(query, [email, password], (err, result) => {
    if (err) {
      console.error('Error during login: ' + err.message)
      res.json({ error: true, message: 'Login failed' })
    } else {
      if (result.length > 0) {
        const userId = result[0].userId
        const name = result[0].name
        const token = jwt.sign({ userId }, 'your_secret_key', { expiresIn: '1 hour' })

        res.json({
          error: false,
          message: 'Login successful',
          loginResult: { userId, name, token }
        })
      } else {
        res.json({ error: true, message: 'Invalid email or password' })
      }
    }
  })
}

// Report link from user
const reportLink = (req, res) => {
  const { link } = req.body

  const reportId = 'reportlink-' + uuid.v4()

  const query = 'INSERT INTO reported_links (reportId, link) VALUES (?, ?)'

  db.query(query, [reportId, link], (err, result) => {
    if (err) {
      console.error('Error reporting link: ' + err.message)
      res.json({ error: true, message: 'Reporting link failed' })
    } else {
      res.json({ error: false, message: 'Link reported successfully' })
    }
  })
}

module.exports = {
  signup,
  login,
  reportLink
}
