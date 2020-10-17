const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        lowercase: true,
        unique:true
    } 
}, {
    password: {
        type: String,
        required: true
    }
}, {
    isAdmin: {
        type: Boolean,
        default: false
    }
}, {
    memberSince: {
        type: Date,
        default: Date.now
    }
}
)

const issueSchema = new Schema({
    issueTitle: {
        type: String,
        required: true
    }
})

const commentSchema = new Schema({
        issueDetails: {
            type: String,
            Required: true
        }
    })

module.exports = mongoose.model("User", userSchema)
