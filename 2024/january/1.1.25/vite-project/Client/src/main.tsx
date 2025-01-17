import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";
import RandomJoke from "./Components/RandomJokes.tsx";
import JokesList from "./Components/JokesList.tsx";
import AddJoke from "./Components/NewJoke.tsx";
import "./main.css";

export type joke = {
    _id: string;
    setup: string;
    punchline: string;
    author: string;
    likes: number;
    createdAt: Date;
  }

function Main() {
  const [joke, setJoke] = useState("");
  const [jokes, setJokes] = useState<joke[]>([]);


  async function fetchJoke() {
    const res = await axios.get("http://localhost:3000/api/v1/jokes/random");
    setJoke(res.data);
  }

  async function deleteJoke(id: string) {
    try {
      await axios.delete(`http://localhost:3000/api/v1/jokes/${id}`);
      setJokes(jokes.filter((joke) => joke._id !== id));
    } catch (error) {
      console.error("Error deleting joke:", error);
    }
  }

  async function likeJoke(id: string) {
    try {
      const res = await axios.put(`http://localhost:3000/api/v1/jokes/${id}/like`);
      setJokes(
        jokes.map((joke) =>
          joke._id === id ? { ...joke, likes: res.data.likes } : joke
        )
      );
    } catch (error) {
      console.error("Error liking joke:", error);
    }
  }

  async function editJoke(id: string, updatedJoke: Partial<joke>) {
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
ReactDOM.createRoot(document.getElementById("root")!).render(<Main />);
