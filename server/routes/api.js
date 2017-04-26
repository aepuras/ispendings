const jwt = require('jsonwebtoken');
const User = require('mongoose').model('User');
const express = require('express');

const router = new express.Router();

router.get('/dashboard', (req, res) => {
  res.status(200).json({
    message: "You're authorized to see this secret message."
  });
});

router.get('/message', (req, res) => {
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.decode(token);
    const userId = decoded.sub;
    User.findById(userId, (userErr, user) => {
        if(userErr || !user) {
            res.status(401).json({
                message: "No user"
            });
        } else {
            res.status(200).json({
                message: user.message
            })
        }
    })
});

module.exports = router;
