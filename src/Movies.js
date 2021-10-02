import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Movie from "./Movie";

const FEATURED_API =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1&include_adult=false";

const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  const getMovies = async (API) => {
    const repo = await fetch(API);
    const movies = await repo.json();
    setMovies(movies.results);
  };

  useEffect(() => {
    getMovies(FEATURED_API);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search) {
      getMovies(SEARCH_API + search);
      setSearch("");
    }
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <header>
        <img src="https://www.kindpng.com/picc/m/8-80623_transparent-movies-logo-png-movies-logo-transparent-png.png" />
        <form onSubmit={handleSubmit}>
          <input
            className="search"
            type="search"
            placeholder="Search..."
            value={search}
            onChange={handleSearch}
          />
        </form>
      </header>
      <div className="movie-container">
        {movies.length > 0 &&
          movies.map((movie) => {
            return <Movie key={movie.id} {...movie} url={movie.URL} />;
          })}
      </div>
    </>
  );
};
export default Movies;
