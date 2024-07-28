const axios = require("axios");
const DELIVER_HUB_PORT = process.env.DELIVER_HUB_PORT;
const DELIVER_HUB_HOST = process.env.DELIVER_HUB_HOST;
const DELIVER_HUB_PROTOCOL = process.env.DELIVER_HUB_PROTOCOL;
const URL = `${DELIVER_HUB_PROTOCOL}://${DELIVER_HUB_HOST}:${DELIVER_HUB_PORT}/joke-deliver`;

const createJoke = async (jokeData) => {
  try {
    const response = await axios.post(
      `http://localhost:3005/joke-deliver/createJoke`,
      jokeData
    );
    console.log("Submitted successfully for Joke Deliver...");
    return response.data;
  } catch (error) {
    console.error("Error submitting for Joke Deliver...", error);
    return null;
  }
};

const updateJoke = async (jokeData) => {
  try {
    const { id } = jokeData;
    const response = await axios.put(
      `http://localhost:3005/joke-deliver/updateJoke/${id}`,
      jokeData
    );
    console.log("Updated successfully for Joke Deliver...");
    return response.data;
  } catch (error) {
    console.error("Error updating for Joke Deliver...", error);
    return null;
  }
};

const deleteJoke = async (id) => {
  try {
    const response = await axios.delete(
      `http://localhost:3005/joke-deliver/deleteJoke/${id}`
    );
    console.log("Submitted delete for Joke Deliver...");
    return response.data;
  } catch (error) {
    console.error("Error deleting for Joke Deliver...", error);
    return null;
  }
};

const getJokeByTitle = async (jokeData) => {
  try {
    const response = await axios.get(
      `http://localhost:3005/joke-deliver/getRandomJokeByType/${jokeData}`
    );
    console.log("Get joke by title successfully for Joke Deliver...");
    return response.data;
  } catch (error) {
    console.error("Error get joke by title for Joke Deliver...", error);
    return null;
  }
};

module.exports = {
  createJoke,
  getJokeByTitle,
  updateJoke,
  deleteJoke,
};
