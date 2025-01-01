function JokesList({ jokes, deleteJoke, likeJoke, editJoke }) {
  return (
    <div className="jokes-container">
      {jokes.map((joke) => (
        <div className="joke-card" key={joke._id}>
          <h6>{joke.setup}</h6>
          <p>{joke.punchline}</p>
          <p>Likes: {joke.likes}</p>
          <span>Joke ID: {joke._id}</span>
          <button
            className="delete-button"
            onClick={() => deleteJoke(joke._id)}
          >
            Delete Joke
          </button>
          <button
            className="like-button"
            onClick={() => likeJoke(joke._id)}
          >
            Like
          </button>
        </div>
      ))}
    </div>
  );
}

export default JokesList;
