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
const findAllIdeas = async (req, res) => {
    CardIdea.find(req.query)
        .then(tickets => {
            res.send(tickets);
        }).catch(err => {
            res.status(500).send({
                success: false,
                message: err.message || "Some error occurred while retrieving tickets."
            });
        });
}

const  findOneTickectIdeas = async (req, res, next) => {
    try {
      const ticketsGet = await CardIdea.findById(req.params.id);
      return res.status(200).json(ticketsGet);
    } catch (error) {
      next(error);
    }
 }

// Retrieve all CardIdeas from the database.
module.exports = { createIdeas , findAllIdeas , findOneTickectIdeas};
