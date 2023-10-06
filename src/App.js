import React, { useEffect, useState } from "react";
import NavBar from "./Components/NavBar";
import MoviesList from "./Components/MoviesList";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import { MovieDet } from "./Components/MovieDet";
function App() {
  const [movies, setMovies] = useState([]);
  const [pageCount, setpageCount] = useState(0);
  //get all movies by axios
  const getAllMovies = async () => {
    const res = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=7dcd6792d916b10948e41f09c8b167c5&language=en"
    );
    setMovies(res.data.results);
    setpageCount(res.data.total_pages);
  };

  //get current page
  const getPage = async (page) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=7dcd6792d916b10948e41f09c8b167c5&language=en&page=${page}`
    );
    setMovies(res.data.results);
    setpageCount(res.data.total_pages);
  };

  useEffect(() => {
    getAllMovies();
  }, []);

  //to search in api
  const search = async (word) => {
    if (word === "") {
      getAllMovies();
    } else {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=7dcd6792d916b10948e41f09c8b167c5&query=${word}&language=en`
      );
      setMovies(res.data.results);
      setpageCount(res.data.total_pages);
    }
  };
  return (
    <div className="font color-body ">
      <NavBar search={search} />
      <div
        className=" d-flex justify-content-center"
        style={{ margin: "20px 10px; " }}>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <MoviesList
                  movies={movies}
                  getPage={getPage}
                  pageCount={pageCount}
                />
              }
            />

            <Route path="/movie/:id" element={<MovieDet />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
