function RandomJoke({ joke, fetchJoke }) {
  return (
    <div className="random-joke-container">
      <h1 className="random-joke-title">Random Joke</h1>
      <p className="random-joke-setup">{joke.setup}</p>
      <p className="random-joke-punchline">{joke.punchline}</p>
      <button className="random-joke-button" onClick={fetchJoke}>
        Get Random Joke
      </button>
    </div>
  );
}

export default RandomJoke;
