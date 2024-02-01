const { createIdeas } = require("../controller/cardidea.controller.js");
const express = require("express");
const router = express.Router();

// Create a new CardIdea routes
router.post("/creatingideas", createIdeas);


module.exports = router;