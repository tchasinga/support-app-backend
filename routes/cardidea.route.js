const { createIdeas , findAllIdeas ,findOneTickectIdeas} = require("../controller/cardidea.controller.js");
const express = require("express");
const router = express.Router();

// Create a new CardIdea routes
router.post("/creatingideas", createIdeas);
router.get("/findingideas", findAllIdeas);
router.get("/findingideasbyid/:id", findOneTickectIdeas);


module.exports = router;