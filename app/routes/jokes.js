const express = require("express");
const router = express.Router();
const Joke = require("../model/joke");

router.post("/api/createJoke", async (req, res) => {
  const { jokeName, jokeType, jokeDescription } = req.body;
  const joke = new Joke({
    jokeName,
    jokeType,
    jokeDescription,
  });

  try {
    await joke.save();
    res.status(201).send({ message: "Joke created successfully", joke });
  } catch (error) {
    res.status(500).send({ message: "Error creating joke", error });
  }
});

module.exports = router;
