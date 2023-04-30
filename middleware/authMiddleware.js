const jwt = require('jsonwebtoken')

const requireAuth = (req, res, next) => {
	let token = req.headers['authorization']

	if (token) {
		token = token.split(' ')[1]
		jwt.verify(token, process.env.TOKEN_SECRET, (err, decodedToken) => {
			if (err) {
				res.status(401).json({ message: 'Please provide a valid token' })
			} else {
				next()
			}
		})
	} else {
		res.status(403).json({ message: 'Please provide a token' })
	}
}

module.exports = { requireAuth }
