const mongoose = require('mongoose');
const commentSchema = new mongoose.Schema({
    user: {
        type: String,
        ref: 'User',
        required: true
    },
    commenting: {
        type: String,
        ref: 'Cardidea',
        required: true
    }
}, {
    timestamps: true
})

const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;