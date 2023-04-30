const {
	add_comment,
	get_all_comments,
} = require('../controller/commentController')
const { requireAuth } = require('../middleware/authMiddleware')

const Router = require('express').Router()

Router.post('/:id', requireAuth, add_comment)
Router.get('/', requireAuth, get_all_comments)

module.exports = Router
