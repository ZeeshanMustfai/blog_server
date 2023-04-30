const {
	add_comment,
	get_all_comments,
} = require('../controller/commentController')

const Router = require('express').Router()

Router.post('/:id', add_comment)
Router.get('/', get_all_comments)

module.exports = Router
