const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
const PORT = 3000;

const AnimalsRoutes = require("./routes/animals/animal.js");

app.use(express.json());

mongoose.connect(process.env.MONGO_URI).then(() => {
   console.log("Connected to database");
});

app.get("/", (req, res) => {
   res.send("Server is OK");
});

app.use("/animals", AnimalsRoutes);

app.listen(PORT, () => {
   console.log(`Server is running on port: ${PORT}`);
});
