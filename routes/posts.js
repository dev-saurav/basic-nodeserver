const express = require('express')
const router = express.Router()
const Post = require('../models/Post')

//ROUTES

//gets all the post
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find()
        res.json(posts)
    } catch (err) {
        res.status(200).send({ msg: "Internal error" })
    }
})

//get specific post
router.get("/:postId", async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId)
        res.json(post)
    } catch (error) {
        res.json(error)
    }

})

//submits a post
router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        desc: req.body.desc
    })
    try {
        const savedPost = await post.save()
        res.json(savedPost)
    } catch (error) {
        res.json({ msg: "Internal Error" })
    }
})

//delete a specefic post
router.delete("/:postId", async (req, res) => {
    try {
        const removedPost = await Post.remove({ _id: req.params.postId })
        res.json(removedPost)
    } catch (error) {
        res.json({ msg: error })
    }

})

//update a post
router.patch('/:postId', async (req, res) => {
    try {
        const updatedPost = await Post.updateOne({ _id: req.params.postId }, {
            $set: {
                title: req.body.title,
            }
        })
        res.json(updatedPost)
    } catch (error) {
        res.json({ msg: error })
    }
})

module.exports = router