const PostModal = require('../models/Post')
const fs = require('fs')
//create post

module.exports.create_post = async (req, res) => {
	const newPost = new PostModal(req.body)
	try {
		const savedPost = await newPost.save()
		res.status(200).json(savedPost)
	} catch (err) {
		res.status(400).json(err)
	}
}

//delete post

module.exports.delete_post = async (req, res) => {
	const postId = req.params.id
	const post = await PostModal.findById(postId)
	if (post) {
		try {
			await post.delete()
			fs.unlinkSync('images' + '/' + post.photo)
			res.status(200).json({ message: 'Post deleted Successfully' })
		} catch (err) {
			res.status(500).json(err)
		}
	} else {
		res.status(201).json({ message: 'Post not found for delete' })
	}
}

//update post

module.exports.update_post = async (req, res) => {
	const postId = req.params.id
	const post = await PostModal.findById(postId)

	if (post) {
		try {
			const updatedPost = await PostModal.findByIdAndUpdate(
				req.params.id,
				{ $set: req.body },
				{ new: true }
			)
			res
				.status(200)
				.json({ message: 'Post updated Successfully', result: updatedPost })
		} catch (err) {
			res.status(400).json(err)
		}
	} else {
		res.status(201).json({ message: 'Post not found for update' })
	}
}

// getOne post

module.exports.get_one_post = async (req, res) => {
	const postId = req.params.id
	const post = await PostModal.findById(postId).populate('comments')
	if (post) {
		try {
			res.status(200).json(post)
		} catch (err) {
			res.status(500).json(err)
		}
	} else {
		res.status(201).json({ message: 'Post not found', result: {} })
	}
}

// get all posts

module.exports.get_all_posts = async (req, res) => {
	const post = await PostModal.find({ user: req.query.id }).populate('comments')
	console.log('post', post)
	if (post) {
		try {
			res.status(200).json(post)
		} catch (err) {
			res.status(400).json(err)
		}
	} else {
		res.status(201).json({ message: 'Posts not found', result: [] })
	}
}
