import "./Row.css";
import React, { useState, useEffect } from "react";
import axios from "./axiox";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
    }
    fetchData();
  }, [fetchUrl]);

  const responsiveSettings = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6.8,
      slidesToSlide: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3.15,
      slidesToSlide: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div className="row">
      <h2 className="row_title">{title}</h2>
      <div className={`row_posters ${isLargeRow && "row_posterLarge"} `}>
      <Carousel responsive={responsiveSettings}>
        {movies.map((movie) => (
          <img
            className={`row_poster `}
            key={movie.id}
            src={`https://image.tmdb.org/t/p/original${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </Carousel>
      </div>
    </div>
  );
};

export default Row;
