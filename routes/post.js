const {
	create_post,
	delete_post,
	update_post,
	get_all_posts,
	get_one_post,
} = require('../controller/postController')
const Router = require('express').Router()

Router.post('/', create_post)
Router.delete('/:id', delete_post)
Router.put('/:id', update_post)
Router.get('/all', get_all_posts)
Router.get('/:id', get_one_post)

module.exports = Router
