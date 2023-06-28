import React, { useState, useEffect } from "react";
import "./MoviesList.css";
import Avatar from "../assets/image 14 (1).png";
const MoviesList = () => {
  const [movielist, setMovieList] = useState([]);

  //   const url = 'https://unogs-unogs-v1.p.rapidapi.com/title/images?netflix_id=%3CREQUIRED%3E';
  // const options = {
  // 	method: 'GET',
  // 	headers: {
  // 		'X-RapidAPI-Key': 'efde1368camsh8c7919dbd53c7a0p18fc8djsn9492e2f31a88',
  // 		'X-RapidAPI-Host': 'unogs-unogs-v1.p.rapidapi.com'
  // 	}
  // };

  // try {
  // 	const response = await fetch(url, options);
  // 	const result = await response.text();
  // 	console.log(result);
  // } catch (error) {
  // 	console.error(error);
  // }
  const fetchMovieData = async () => {
    // fetch(
    //   "https://unogs-unogs-v1.p.rapidapi.com/title/images?netflix_id=%3CREQUIRED%3E"
    // )
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => {
    //     setMovieList(data);
    //   });
    const url = "https://unogs-unogs-v1.p.rapidapi.com/title/images";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "efde1368camsh8c7919dbd53c7a0p18fc8djsn9492e2f31a88",
        "X-RapidAPI-Host": "unogs-unogs-v1.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.text();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
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
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
