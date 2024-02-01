const CardIdea = require("../models/cardidea.model.js");

// Create and Save a new CardIdea
const createIdeas = async (req, res) => {
  try {
    const ticketsCreater = await CardIdea.create(req.body);
    res.status(201).json({
      success: true,
      data: ticketsCreater,
      message: "Create ticketsCreater successfully",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message || "Failed to create ticketsCreater table",
    });
  }
};

// Retrieve all CardIdeas from the database.
module.exports = { createIdeas };
