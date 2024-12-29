const express = require("express");
const {
  getAllJokes,
  createJoke,
  getJokeById,
  updateJoke,
  deleteJoke,
  getRandomJoke,
  getJokeByAuthorId,
  likeJoke,
} = require("../controllers/jokesController.js");

const router = express.Router();

// Get all jokes

router.get("/", getAllJokes);

// Create a new joke

router.post("/:userId", createJoke);

// Get a random joke

router.get("/random", getRandomJoke);

// Get Joke by author (User) id
// TODO: Add to Postman
router.get("/user/:id", getJokeByAuthorId);

// Get a single joke by ID

router.get("/:id", getJokeById);

// Update a joke by ID

router.put("/:id", updateJoke);

// Delete a joke by ID

router.delete("/:id", deleteJoke);

//Update likes

router.put("/:id/like", likeJoke);
module.exports = router;
