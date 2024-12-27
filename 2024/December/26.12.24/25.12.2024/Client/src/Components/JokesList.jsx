function JokesList({ jokes }) {
  return (
    <div>
      {jokes.map((joke) => (
        <div key={joke._id}>
          <h6>{joke.setup}</h6>
          <p>{joke.punchline}</p>
          <span>{joke._id}</span>
        </div>
      ))}
    </div>
  );
}

export default JokesList;
