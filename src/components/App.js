import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./Header";
import Movie from "./Movie";
import Search from "./Search";

const MOVIE_API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=ff116c";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    fetch(MOVIE_API_URL)
      .then(response => response.json())
      .then(jsonResponse => {
        setMovies(jsonResponse.Search);
        setLoading(false);
    });
  }, []);

  const search = (searchValue) => {
    setLoading(true);
    setErrorMessage(null);

    fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=ff116c`)
      .then(response => response.json())
      .then(jsonResponse =>{
        if(jsonResponse.Response === "True") {
          setMovies(jsonResponse.Search);
          setLoading(false);
        }
        else{
          setErrorMessage(jsonResponse.Error);
          setLoading(false);
        }
    });
  };

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
