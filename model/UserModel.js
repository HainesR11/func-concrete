const mongoose = require('mongoose');
const { ObjectId } = require('mongodb');
const validator = require('validator')

//Name, ProfilePicture, Username, Password, Email, DefaultColor
//Later on ---- Projects, Tasks

const UserSchema = new mongoose.Schema({
    UserId: {
        type: ObjectId
    },
    Name:{
        type: String,
        required: [true, 'All users must have a name'],
        trim: true
    },
    Username:{
        type: String,
        required: [true, 'User Must have a username'],
        trim: true,
    },
    Password: {
        type: String,
        required: [true, 'User Must have a password'],
        trim: true,
        minlength: 8
    },
    ConfirmPassword: {
        type: String,
        required: [true, 'You must confirm the password'],
        trim: true,
        minlength: 8
    },
    Email: {
        type: String,
        required: [true, 'User Must have a password'],
        trim: true,
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'Please provide a valid Email']
    },
    Color: {
        type: String 
    }
})

const User = mongoose.model('User', UserSchema)

module.exports = User