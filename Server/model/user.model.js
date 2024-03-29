const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    // profileImage: {
    //     type: String,
    //     required: true,
    // },
    mobile: {
        type: Number,
        required: true,
        trim: true,
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    }
})

const user = mongoose.model('userSchema', userSchema)
module.exports = user;
