import React, { useEffect, useState } from "react";
import axios from "axios";

import {
  StyledMovieList,
  MovieItem,
  MoviePoster,
  MovieName,
  ReleaseDate,
} from "./styles";

export const MovieList = () => {
  const [movie, setMovie] = useState("");
  useEffect(() => {
    axios
      .get("https://api.tvmaze.com/schedule/web?date=2021-09-22&country=US")
      .then(function (response) {
        setMovie(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [setMovie]);
  return (
    <StyledMovieList>
      {movie &&
        movie.map((item, index) => (
          <MovieItem key={index}>
            <MoviePoster src={item._embedded.show.image.medium}></MoviePoster>
            <MovieName>{item.name}</MovieName>
            <ReleaseDate>{item._embedded.show.premiered}</ReleaseDate>
          </MovieItem>
        ))}
    </StyledMovieList>
  );
};

export default MovieList;
