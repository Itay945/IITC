import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";
import RandomJoke from "./Components/RandomJokes.jsx";
import JokesList from "./Components/JokesList.jsx";
import AddJoke from "./Components/NewJoke.jsx";
import "./main.css";

function Main() {
  const [joke, setJoke] = useState("");
  const [jokes, setJokes] = useState([]);

  const api = axios.create({
    baseURL: process.env.NODE_ENV === "production" ? "api" : "//localhost:3000/api",
  });

  async function fetchJoke() {
    const res = await axios.get("http://localhost:3000/api/v1/jokes/random");
    setJoke(res.data);
  }

  async function deleteJoke(id) {
    try {
      await axios.delete(`http://localhost:3000/api/v1/jokes/${id}`);
      setJokes(jokes.filter((joke) => joke._id !== id));
    } catch (error) {
      console.error("Error deleting joke:", error);
    }
  }

  async function likeJoke(id) {
    try {
      const res = await axios.put(`http://localhost:3000/api/v1/jokes/${id}/like`);
      setJokes(jokes.map((joke) => (joke._id === id ? { ...joke, likes: res.data.likes } : joke)));
    } catch (error) {
      console.error("Error liking joke:", error);
    }
  }

  async function editJoke(id, updatedJoke) {
    try {
      const res = await axios.put(`http://localhost:3000/api/v1/jokes/${id}`, updatedJoke);
      setJokes(jokes.map((joke) => (joke._id === id ? res.data : joke)));
    } catch (error) {
      console.error("Error editing joke:", error);
    }
  }

  async function getAllJokes() {
    const res = await axios.get("http://localhost:3000/api/v1/jokes");
    setJokes(res.data);
  }

  useEffect(() => {
    fetchJoke();
    getAllJokes();
  }, []);

  return (
    <div className="mainContainer">
      <RandomJoke joke={joke} fetchJoke={fetchJoke} />
      <AddJoke onJokeAdded={(newJoke) => setJokes([...jokes, newJoke])} />
      <JokesList jokes={jokes} deleteJoke={deleteJoke} likeJoke={likeJoke} editJoke={editJoke} />
    </div>
  );
}

// Render the Main component
ReactDOM.createRoot(document.getElementById("root")).render(<Main />);
