const Comment = require('../models/comment.model.js');

// Create and Save a new Comment
const createComments = async (req, res) => {
    try {
        const ticketsCreaterComment = await Comment.create(req.body);
        res.status(201).json({
          success: true,
          data: ticketsCreaterComment,
          message: "Create ticketsCreater successfully",
        });
      } catch (error) {
        res.status(400).json({
          success: false,
          message: error.message || "Failed to create ticketsCreater table",
        });
      }
}

module.exports = { createComments };