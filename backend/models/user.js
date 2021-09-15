const mongoose = require('mongoose');
const Joi = require('joi');
const User = mongoose.model('User', new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 50
    },
    lastName: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 50
    },
    age: {
        type: Number,
        required: true,
    },
    userName: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 50
    },
    email: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 50
    },
    password: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 50
    },
    comments: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 50
    },
}))

const validateUser = (user) => {
    const schema = Joi.object({
        firstName: Joi.string().min(3).max(50).required(),
        lastName: Joi.string().min(3).max(50).required(),
        age: Joi.number().required(),
        userName: Joi.string().min(3).max(50).required(),
        email: Joi.string().min(3).max(50).required(),
        password: Joi.string().min(3).max(50).required(),
        comments: Joi.string().min(3).max(50).required()
    })
    const result = schema.validate(user)
    return result
}

exports.User = User;
exports.validateUser = validateUser;