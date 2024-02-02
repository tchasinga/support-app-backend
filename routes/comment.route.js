const {createComments , findAllIdeasComments} = require('../controller/comment.controller.js');
const express = require("express");
const router = express.Router();

// Create a new Comment routes
router.post("/creatingcomments", createComments);
router.get("/findallcomments", findAllIdeasComments);

module.exports = router;