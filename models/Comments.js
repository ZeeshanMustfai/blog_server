const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
	text: {
		type: String,
		required: true,
	},

	date: {
		type: Date,
		required: false,
		default: Date.now(),
	},

	post: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'post',
	},
})

module.exports = mongoose.model('comments', commentSchema)
