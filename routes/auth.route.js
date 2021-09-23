// auth route

const express = require('express');
const jwt = require("jsonwebtoken");
const authorize = require('../middleware/auth');
const bcrypt = require('bcrypt');
const router = express.Router();
const userSchema = require("../models/users");
const auth = require('../middleware/auth');



//sign in

router.post("/Login", (req, res, next) => {
    let getUser;
    userSchema.findOne({
        email: req.body.email
    }).then(user => {
        if (!user) {
            return res.status(401).json({
                message: "Auth Failed"
            });
        }
        getUser = user;
        return bcrypt.compare(req.body.password, user.password);
    })
        .then(response => {
            if (!response) {
                return res.status(401).json({
                    message: "Auth Failed"
                })
            }
            let jwtToken = jwt.sign({
                email: getUser.email,
                userID: getUser._id,
            }, "longer-secret-is-better", {
                expiresIn: '1h',
            });
            res.status(200).json({
                token: jwtToken,
                expiresIn: 6600,
                msg: getUser
            })

        })
        .catch(err => {
            return res.status(401).json({
                message: "Auth Failed"
            });
        });
});

//sign up

router.post("/Register", (req, res, next) => {
    bcrypt.hash(req.body.password, 10).then((hash) => {
        const user = new userSchema({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: hash,
        });
        user.save().then((response) => {
            res.status(201).json({
                message: 'User created',
                result: response
            })
                .catch(err => {
                    res.status(500).json({
                        error,
                    });
                });
        });
    });
});


// Get All Users
router.get("/all-users", authorize, (req, res, next) =>
    userSchema.find((error, response) => {
        if (error) {
            return next(error)
        } else {
            res.status(200).json(response)
        }
    })
)

// Get A Single User
router.route('/profile-user/:id').get(authorize, (req, res, next) => {
    userSchema.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data,
            });
        }
    });
});

// Delete A User
router.route('/delete-user/:id').delete((req, res, next) => {
    userSchema.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data,
            });
        }
    });
});

module.exports = router

