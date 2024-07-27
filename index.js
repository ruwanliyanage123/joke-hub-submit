const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/api/readJoke", (req, res, next) => {
  try {
    res.send("GET request to the example endpoint");
  } catch (error) {
    next(error);
  }
});

app.post("/api/createJoke", (req, res) => {
  const joke = req.body;
  res.send(joke);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Internal Serever Error");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
