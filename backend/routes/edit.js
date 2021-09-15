const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const Joi = require('joi');
const { User, validateUser } = require('../models/user')


router.put('/', async (req, res) => {
    const { value, error } = validateUser(req.body)
    if (error) {
        res.status(400).send(error.details[0].message)
        return;
    }

    let user = new User ({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age,
        userName: req.body.userName,
        email: req.body.email,
        password: req.body.password,
        comments: req.body.comments
    })
    user = await user.save()
    res.send(user)
})


module.exports = router