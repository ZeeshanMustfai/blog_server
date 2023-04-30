const mongoose = require('mongoose')
const Comments = require('../models/Comments')
const Post = require('../models/Post')
module.exports.add_comment = async (req, res) => {
	const postId = req.params.id
	const post = mongoose.Types.ObjectId.isValid(postId)
	if (post) {
		const newComment = await Comments.create(req.body)
		if (newComment) {
			const updatedPost = await Post.findByIdAndUpdate(
				{ _id: req.params.id },
				{
					$push: {
						comments: newComment._id,
					},
				},
				{ new: true }
			)

			res.status(200).json({ message: 'Comment added successfully' })
		}
	} else {
		res.status(200).json({ message: 'Post not found for comment' })
	}
}

module.exports.get_all_comments = async (req, res) => {
	const comment = await Comments.find()
	if (comment) {
		try {
			res.status(200).json(comment)
		} catch (err) {
			res.status(400).json(err)
		}
	} else {
		res.status(201).json({ message: 'Comments not found', result: [] })
	}
}
