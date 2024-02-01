const mongoose = require("mongoose");
const cardIdeaSchema = new mongoose.Schema({
    author: {
        type: String,
        trim: true,
        required: true,
    },
    functionality: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        trim: true,
        required: true,
    },
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
    },
    image: {
        type: String,
        default: "https://images.pexels.com/photos/207607/pexels-photo-207607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
},{timestamps: true,});

const CardIdea = mongoose.model("CardIdea", cardIdeaSchema);
module.exports = CardIdea;