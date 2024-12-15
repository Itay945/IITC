const express = require("express");
const router = express.Router();

const DUMMY_JOKES = [
  {
    baseline: "Why don’t skeletons fight each other?",
    punchline: "They don’t have the guts.",
  },
  { baseline: "What do you call fake spaghetti?", punchline: "An impasta!" },
  {
    baseline: "Why did the scarecrow win an award?",
    punchline: "Because he was outstanding in his field.",
  },
  {
    baseline: "What do you call cheese that isn’t yours?",
    punchline: "Nacho cheese.",
  },
  {
    baseline: "Why don’t scientists trust atoms?",
    punchline: "Because they make up everything.",
  },
  {
    baseline: "What’s orange and sounds like a parrot?",
    punchline: "A carrot.",
  },
  {
    baseline: "Why can’t your nose be 12 inches long?",
    punchline: "Because then it’d be a foot.",
  },
  {
    baseline: "What do you call a bear with no teeth?",
    punchline: "A gummy bear.",
  },
  {
    baseline: "What do you call a factory that makes okay products?",
    punchline: "A satisfactory.",
  },
  {
    baseline: "Why did the bicycle fall over?",
    punchline: "Because it was two-tired.",
  },
];

router.get("/", (req, res) => {
  res.send("Jokes List");
});

router.get("/new", (req, res) => {
  res.send(DUMMY_JOKES);
});

router.post("/", (req, res) => {
  res.send("Create Joke");
});

router
  .route("/:id")
  .get((req, res) => {
    res.send(`Joke Get With ID ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`Update Joke With ID ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Delete Joke With ID ${req.params.id}`);
  })
  .post((req, res) => {
    console.log(req.params);

    res.send(`Post Joke With ID ${req.params.id}`);
  });

module.exports = router;
