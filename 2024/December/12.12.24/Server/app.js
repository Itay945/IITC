const express = require("express");

const app = express();

const port = process.env.PORT || 3000;

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

app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get("/joke/random", (req, res) => {
  const randomJokes =
    DUMMY_JOKES[Math.floor(Math.random() * DUMMY_JOKES.length)];
  res.send(randomJokes);
});

const usernames = [
  "GuitarHero22",
  "GymRat77",
  "DeepThinker101",
  "MusicManiac99",
  "ChillVibes88",
  "CodeCrafter21",
  "FriendlyFox7",
  "StarryDreamer9",
  "TheRealMaverick",
  "MindfulTraveler",
];

app.get("/usernames", (req, res) => {
  const randomUsernames =
    usernames[Math.floor(Math.random() * usernames.length)];
  res.send(randomUsernames);
});

const DUMMY_ITEMS = [
  { id: 1, name: "Apple", category: "Fruits", price: 1.2 },
  { id: 2, name: "Banana", category: "Fruits", price: 0.8 },
  { id: 3, name: "Carrot", category: "Vegetables", price: 0.5 },
  { id: 4, name: "Bread", category: "Bakery", price: 2.0 },
  { id: 5, name: "Milk", category: "Dairy", price: 1.5 },
  { id: 6, name: "Cheese", category: "Dairy", price: 3.0 },
  { id: 7, name: "Chicken", category: "Meat", price: 5.0 },
  { id: 8, name: "Fish", category: "Seafood", price: 7.0 },
  { id: 9, name: "Orange Juice", category: "Beverages", price: 2.5 },
  { id: 10, name: "Cereal", category: "Pantry", price: 4.0 },
];

app.get("/items/random", (req, res) => {
  const randomItems =
    DUMMY_ITEMS[Math.floor(Math.random() * DUMMY_ITEMS.length)];
  res.send(randomItems);
});
