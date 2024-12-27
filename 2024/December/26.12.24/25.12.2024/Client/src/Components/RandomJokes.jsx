function RandomJoke({ joke, fetchJoke }) {
  return (
    <div>
      <h1>Random Joke</h1>
      <p>{joke.setup}</p>
      <p>{joke.punchline}</p>
      <button onClick={fetchJoke}>Get Random Joke</button>
    </div>
  );
}

export default RandomJoke;
