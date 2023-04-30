const {
	create_post,
	delete_post,
	update_post,
	get_all_posts,
	get_one_post,
} = require('../controller/postController')
const { requireAuth } = require('../middleware/authMiddleware')
const Router = require('express').Router()

Router.post('/', requireAuth, create_post)
Router.delete('/:id', requireAuth, delete_post)
Router.put('/:id', requireAuth, update_post)
Router.get('/all', requireAuth, get_all_posts)
Router.get('/:id', requireAuth, get_one_post)

module.exports = Router
