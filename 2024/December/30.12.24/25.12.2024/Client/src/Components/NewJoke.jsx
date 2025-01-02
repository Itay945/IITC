import { useState } from "react";
import axios from "axios";

function AddJoke({ onJokeAdded }) {
  const [setup, setSetup] = useState("");
  const [punchline, setPunchline] = useState("");

  async function handleAddJoke() {
    try {
      const res = await axios.post("http://localhost:3000/api/v1/jokes", {
        setup,
        punchline,
      });
      onJokeAdded(res.data); // Notify the parent to update the jokes list
      setSetup(""); // Clear the inputs
      setPunchline("");
    } catch (error) {
      console.error("Error adding joke:", error);
    }
  }

  return (
    <div className="add-joke-form">
      <h2>Add a New Joke</h2>
      <input
        type="text"
        placeholder="Setup"
        value={setup}
        onChange={(e) => setSetup(e.target.value)}
      />
      <input
        type="text"
        placeholder="Punchline"
        value={punchline}
        onChange={(e) => setPunchline(e.target.value)}
      />
      <button onClick={handleAddJoke}>Add Joke</button>
    </div>
  );
}

export default AddJoke;
