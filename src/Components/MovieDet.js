import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

export const MovieDet = () => {
    const param = useParams();
    const [movie, setMovie] = useState([]);

    //get  movie by details
    const getMovieDetails = async () => {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/${param.id}?api_key=7dcd6792d916b10948e41f09c8b167c5&language=en`
        );
        setMovie(res.data);
    };
    useEffect(() => {
        getMovieDetails();
    }, []);
    return (
      <div>
        <div className="list">
          <section className="firstSec">
            <div className="card-detalis">
              <img
                className="img-movie w-30"
                src={`https://image.tmdb.org/t/p/w500/` + movie.poster_path}
                alt="img"
              />
            </div>
            <div className="gridT">
              <div className="info">
                <p className="card-text-details border-bottom">
                  Title : {movie.title}
                </p>
                <p className="card-text-details border-bottom">
                  Release_date :{movie.release_date}
                </p>
                <p className="card-text-details border-bottom">
                  Vote_count: {movie.vote_count}
                </p>
                <p className="card-text-details border-bottom">
                  Rate:{movie.vote_average}
                </p>
              </div>
            </div>
          </section>
        </div>
        <div className="sec2">
          <h1 style={{ fontSize: "40px", fontWeight: "bold" }}>Story:</h1>
          <p className="card-text-story">{movie.overview}</p>
        </div>
        <div className="sec3">
          <Link to="/">
            <Button className="btn Mbtn" variant="outline-danger">
              Back
            </Button>
          </Link>
          <a href={movie.homepage}>
            <Button className="btn Mbtn" variant="outline-danger">
              Watch movie
            </Button>
          </a>
        </div>
      </div>
    );
};
