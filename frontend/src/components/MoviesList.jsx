import React, { useState, useEffect } from "react";
import "./MoviesList.css";
import Avatar from "../assets/image 14 (1).png";
const MoviesList = () => {
  const [movielist, setMovieList] = useState([]);

  const fetchMovieData = () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNGNiODA5ZGM0ODU3ZTE2OTg2OTZlMjczNzUzZmY2ZiIsInN1YiI6IjYzNjM3MzYwNjlkMjgwMDA3ZDFhNGM3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yq1n2U4BvR9sVGVwXd3Oc5sJJrVhRc8cPL8sH-JQ5c4",
      },
    };

    fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
      options
    )
      .then((response) => response.json())
      .then((data) => {
        setMovieList(data.results);
      })
      .then((response) => console.log(response))

      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchMovieData();
  }, []);
  console.log(movielist);

  return (
    <div className="movies-section">
      <div>
        <header>
          <div>
            <p>Superapp</p>
          </div>
          <div>
            <img src={Avatar} alt="" />
          </div>
        </header>
      </div>
      <div id="Entertainment-text">
        <p>Entertainment according to your choice</p>

        <div className="movie-list-section">
          <div>
            <p>Action</p>
          </div>
          <div className="movie-posters">
            {movielist.map((data) => {
              const { id, backdrop_path, poster_path, overview } = data;
              return (
                <div>
                  <img
                    src={`https://image.tmdb.org/t/p/original` + backdrop_path}
                    alt=""
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
