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

// Retrieve all Comment from the database.
const findAllIdeasComments = async (req, res) => {
    Comment.find(req.query)
        .then(tickets => {
            res.send(tickets);
        }).catch(err => {
            res.status(500).send({
                success: false,
                message: err.message || "Some error occurred while retrieving tickets."
            });
        });
}


module.exports = { createComments , findAllIdeasComments };