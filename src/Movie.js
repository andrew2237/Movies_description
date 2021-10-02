import React from "react";

const IMAGES_API = "http://image.tmdb.org/t/p/w1280";
const FEATURED_API =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const setVote = (vote) => {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 6) {
    return "orange";
  } else {
    return "red";
  }
};

export const Movie = ({ title, poster_path, overview, vote_average, URL }) => {
  return (
    <div className="movie">
      <img
        src={
          poster_path
            ? IMAGES_API + poster_path
            : "https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80"
        }
        alt={title}
      ></img>
      <div className="movie-info">
        <h3>{title}</h3>
        <span className={`tag ${setVote(vote_average)}`}>{vote_average}</span>
      </div>
      <div className="movie-overview">
        <h2>Overview:</h2>
        <p>{overview}</p>
      </div>
    </div>
  );
};

export default Movie;
