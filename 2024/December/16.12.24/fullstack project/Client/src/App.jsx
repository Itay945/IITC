import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
   const [count, setCount] = useState(0);

   function fetchJoke() {
      axios.get("http://localhost:3000/api/v1/");
   }
   return (
      <>
         <div></div>
         <button>Get Random Joke</button>
      </>
   );
}

export default App;
