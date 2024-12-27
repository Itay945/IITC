import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";
import RandomJoke from "./Components/RandomJokes.jsx";
import JokesList from "./Components/JokesList.jsx";
import "./main.css"
function Main() {
  const [joke, setJoke] = useState("");
  const [jokes, setJokes] = useState([]);

  async function fetchJoke() {
    const res = await axios.get("http://localhost:3000/api/v1/jokes/random");
    setJoke(res.data);
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
    <>
    <div className="mainContainer">
      <RandomJoke joke={joke} fetchJoke={fetchJoke} />
      <JokesList jokes={jokes} />
    </div>
    </>
  );
}

// Render the Main component
ReactDOM.createRoot(document.getElementById("root")).render(<Main />);
