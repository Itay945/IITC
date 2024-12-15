const express = require("express");
const router = express.Router();
const animals = [
   { id: 1, name: "Lion" },
   { id: 2, name: "Tiger" },
   { id: 3, name: "Elephant" },
   { id: 4, name: "Giraffe" },
   { id: 5, name: "Zebra" },
];

router.get("/", (req, res) => {
   res.send("this is Animals route");
});

router.get("/", (req, res) => {
   res.send({
      status: "success",
      data: animals,
   });
});

router.get("/random", (req, res) => {
   const randAnimal = animals[Math.floor(Math.random() * animals.length)];
   res.send(randAnimal);
});
router.get("/:id", (req, res) => {
   const { id } = req.params;

   animals.forEach((animal) => {
      if (animal.id == id) {
         return res.send(animal);
      }
   });
   res.status(404).send(`Animal with id: ${id} does not exsit`);
});
module.exports = router;
