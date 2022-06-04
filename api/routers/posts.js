const User = require("../models/User");
const Post = require("../models/Post");
const PostComment = require("../models/PostComment");
const express = require("express");
const router = express.Router();
const verify = require("../verifyToken");

//CREATE A POST
router.post("/", verify, async (req, res) => {
    try {
        const newPost = new Post({
            userId: req.user.id,
            ...req.body
        });
        await newPost.save();
        res.status(200).json(newPost);
    } catch (error) {
        res.status(500).json(error);
    }
});

//DELETE A POST
router.delete("/:id", verify, async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (req.user.id === post.userId) {
            await Post.findByIdAndDelete(req.params.id);
            res.status(200).json("The post has been deleted");
        } else {
            res.status(400).json("This is not your post!");
        }

    } catch (error) {
        res.status(500).json("error");
    }
});

//UPDATE A POST
router.put("/:id", verify, async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (req.user.id === post.userId) {
            await post.updateOne({ $set: { desc: req.body.desc } })
            res.status(200).json("The post has been updated");
        } else {
            res.status(400).json("This is not your post!");
        }
    } catch (error) {
        res.status(500).json(error);
    }

});

//GET A POST
router.get("/:id", verify, async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        const countComt = await PostComment.count({ userId: post.userId });

        res.status(200).json({ post, countComt });
    } catch (error) {
        res.status(500).json(error);
    }
});

//GET TIMELINE POST
router.get("/timelines/:userId", verify, async (req, res) => {
    try {
        const user = await User.findById(req.params.userId);
        const userPosts = await Post.find({ userId: user._id })

        const friendPost = await Promise.all(
            user.followings.map((friendId) => {
                return Post.find({ userId: friendId })
            })
        )

        res.status(200).json(userPosts.concat(...friendPost));
    } catch (error) {
        res.status(500).json(error);
    }
})

//GET USER POST
router.get("/profile/:userId", verify, async (req, res) => {
    try {
        const user = await User.findById(req.params.userId);
        const userPosts = await Post.find({ userId: user._id });
        res.status(200).json({ ...userPosts });
    } catch (error) {
        res.status(500).json(error);
    }
});

//LIKE/DISLIKE A POST
router.put("/:id/like", verify, async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        const user = await User.findById(req.user.id);

        if (!post.like.includes(user._id)) {
            await post.updateOne({ $push: { like: req.user.id } });
            res.status(200).json("This post has been liked by you!")
        } else {
            await post.updateOne({ $pull: { like: req.user.id } });
            res.status(200).json("This post has been unliked by you!")
        }

    } catch (error) {
        res.status(500).json(error);
    }
});

//COMMENT A POST
router.post("/:id/comment", verify, async (req, res) => {
    try {
        const newComment = new PostComment({
            userId: req.user.id,
            postId: req.params.id,
            text: req.body.text
        });
        await newComment.save();

        res.status(200).json(newComment);

    } catch (error) {
        res.status(500).json(error);
    }
});

//DELETE A COMMENT
router.delete("/:id/comment/:cmtId", verify, async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        const comment = await PostComment.findById(req.params.cmtId);
        if (post._id.toString() === comment.postId) {
            if (post.userId === req.user.id || comment.userId === req.user.id || req.user.isAdmin) {
                await PostComment.findByIdAndDelete(req.params.cmtId);
                res.status(200).json("Deleted this comment!");
            } else {
                res.status(400).json("You cant delete this comment");
            }
        } else {
            res.status(400).json("This post dont have this comment")
        }

    } catch (error) {
        res.status(500).json(error);
    }
});

//UPDATE A COMMENT
router.put("/:id/comment/:cmtId", verify, async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        const comment = await PostComment.findById(req.params.cmtId);
        if (post._id.toString() === comment.postId && comment.userId === req.user.id) {
            await PostComment.findByIdAndUpdate(req.params.cmtId, { text: req.body.text });
            res.status(200).json("Updated this comment!");
        } else {
            res.status(400).json("You can change this comment!")
        }
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;
