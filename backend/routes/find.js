const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const {User, validateUser} = require('../models/user')

// If nothing is in find just return the whole list 
router.get('/', async (req, res) => {
    const users = await User.find();
    res.send(users.map(user => user));
})

const findUser = async (userTag) => {
    let users = await User.find({ firstName : userTag });
    if (users.length === 0) users = await User.find({ lastName : userTag });
    if (users.length === 0) users = await User.find({ userName : userTag });
    if (users.length === 0) users = await User.find({ email : userTag });
    
    if (users.legnth === 0)  return 'No users found';
    else return users
}

router.get('/:name', async (req, res) => {
    console.log(req.params.name)
    const users = await findUser(req.params.name);
    res.send(users)
})    


router.put('/:name', async (req, res) => {
    const { value, error } = validateUser(req.body)
    if (error) {
        res.status(400).send(error.details[0].message)
        return;
    }
    // Look for the person
    const users = await User.findOneAndUpdate( {userName: req.params.name}, {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age,
        userName: req.body.userName,
        email: req.body.email,
        password: req.body.password,
        comments: req.body.comments,
    })
    res.send(users)
  
})

router.delete('/:name', async (req, res) => {
    const { value, error } = validateUser(req.body)
    if (error) {
        res.status(400).send(error.details[0].message)
        return;
    }
    // Look for the person
    const users = await User.findOneAndRemove({userName: req.params.name})
    res.send(users)
})


module.exports = router