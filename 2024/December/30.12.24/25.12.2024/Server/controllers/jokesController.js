const Joke = require("../models/Joke.model.js");
const path = require("patch");

const getAllJokes = async (req, res) => {
  try {
    const jokes = await Joke.find();
    res.json(jokes);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const createJoke = async (req, res) => {
  try {
    console.log(req.body);

    const { userId } = req.params;
    const joke = { ...req.body, author: userId };

    const result = await Joke.create(joke);
    console.log(result);

    res.status(201).json(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getJokeById = async (req, res) => {
  try {
    const { id } = req.params;

    const joke = await Joke.findById(id);
    if (!joke) throw new Error("Joke not found");

    return res.json(joke);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getJokeByAuthorId = async (req, res) => {
  try {
    const { id } = req.params;

    const jokes = await Joke.find({ author: id });
    if (!jokes) throw new Error("Jokes not found");

    return res.json(jokes);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateJoke = async (req, res) => {
  try {
    const { id } = req.params;

    // Vlidate the request body
    if (!req.body.setup) {
      throw new Error("You must provide a setup");
    }

    if (!req.body.punchline) {
      throw new Error("You must provide a punchline");
    }

    const joke = await Joke.findByIdAndUpdate(id, req.body, { new: true });

    if (!joke) throw new Error("Joke not found");

    res.send({
      message: "Joke updated successfully",
      joke,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const deleteJoke = async (req, res) => {
  try {
    const { id } = req.params;
    const joke = await Joke.findByIdAndDelete(id);

    if (!joke) throw new Error("Joke not found");

    res.send({
      message: "Joke deleted successfully",
    });
  } catch (error) {}
};

const getRandomJoke = async (req, res) => {
  try {
    const count = await Joke.countDocuments();
    const random = Math.floor(Math.random() * count);
    const joke = await Joke.findOne().skip(random);

    res.json(joke);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const likeJoke = async (req, res) => {
  try {
    const { id } = req.params;

    // Find the joke by ID and increment the likes
    const joke = await Joke.findById(id);
    if (!joke) {
      return res.status(404).json({ message: "Joke not found" });
    }

    joke.likes += 1; // Increment the likes count
    const updatedJoke = await joke.save(); // Save the updated joke

    res.status(200).json(updatedJoke); // Send back the updated joke data
  } catch (error) {
    res.status(500).send(error.message);
  }
};

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

module.exports = {
  getAllJokes,
  createJoke,
  getJokeById,
  updateJoke,
  deleteJoke,
  getRandomJoke,
  getJokeByAuthorId,
  likeJoke,
};
