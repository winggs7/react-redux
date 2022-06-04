const User = require("../models/User");
const express = require("express");
const router = express.Router();
const bcrypt = require('bcrypt');
const verify = require("../verifyToken");

//UPDATE A USER
router.put("/:id", verify, async (req, res) => {
    if (req.params.id === req.user.id || req.user.isAdmin) {
        if (req.body.password) {
            try {
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt);
            } catch (error) {
                res.status(500).json("error");
            }
        }

        try {
            const user = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body
            }, { new: true });

            res.status(200).json(user);
        } catch (error) {
            res.status(500).json(error);
        }
    } else {
        res.status(403).json("You cant update this user");
    }
});

//GET A USER
router.get("/", verify, async (req, res) => {
    const userId = req.query.userId;
    const username = req.query.username;

    try {
        const user = !userId ? await User.findOne({ username: username }) : await User.findById(userId);
        const { password, updatedAt, ...info } = user._doc;

        res.status(200).json(info);
    } catch (error) {
        res.status(400).json(error);
    }

});

//DELETE A USER
router.delete("/:id", verify, async (req, res) => {
    if (req.params.id === req.user.id || req.user.isAdmin) {
        try {
            await User.findByIdAndDelete(req.params.id);
            res.status(200).json("User has been deleted!");
        } catch (error) {
            res.status(500).json(error);
        }
    } else {
        res.status(403).json("You cant delete this user!")
    }
});

//GET FRIENDS
router.get("/friends/:userId", verify, async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.params.userId });
        const friends = await Promise.all(
            user.followings.map((friendId) => {
                return User.findById(friendId);
            })
        )
        const listFriends = [];
        friends.map(async (friend) => {
            const { _id, username, profilePic, followers, followings } = friend;
            const followersNum = followers.length;
            const followingsNum = followings.length;

            return listFriends.push({ _id, username, profilePic, followersNum, followingsNum });
        });

        res.status(200).json(listFriends);
    } catch (error) {
        res.status(500).json(error);
    }
})

//FOLLOW A USER
router.post("/:id/follow", verify, async (req, res) => {
    if (req.user.id !== req.params.id) {
        try {
            const user = await User.findOne({ _id: req.user.id });
            const follower = await User.findById(req.params.id);

            if (!user.followings.includes(req.params.id)) {
                await user.updateOne({ $push: { followings: req.params.id } });
                await follower.updateOne({ $push: { followers: req.user.id } });
                res.status(200).json("You have successfully followed!");
            } else {
                res.status(400).json("You already followed this user!")
            }

        } catch (error) {
            res.status(500).json(error);
        }

    } else {
        res.status(500).json("You cant follow yourself!");
    }
})

//UNFOLLOW A USER
router.post("/:id/unfollow", verify, async (req, res) => {
    if (req.user.id !== req.params.id) {
        try {
            const user = await User.findById(req.user.id);
            const follower = await User.findById(req.params.id);

            if (user.followings.includes(req.params.id)) {
                await user.updateOne({ $pull: { followings: req.params.id } });
                await follower.updateOne({ $pull: { followers: req.user.id } });
                res.status(200).json("You have successfully unfollowed!");
            } else {
                res.status(400).json("You already unfollowed this user!")
            }

        } catch (error) {
            res.status(500).json(error);
        }
    } else {
        res.status(500).json("You cant unfollow yourself!");
    }
});


module.exports = router;
