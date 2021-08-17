import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SavedList from './Movies/SavedList';
import { Router } from 'react-router';
import {Switch, Route, Link} from "react-router-dom"
import MovieList from './Movies/MovieList'
import MovieCard from './Movies/MovieCard'

export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  console.log("movieList", movieList)
  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          //step3
          // Study this response with a console log
          console.log(response)
          // and set the response data to the 'movielist' state
          setMovieList(response.data)
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  return (
    <div>
      <SavedList list={[ /* This is stretch */]} />
      
      <div>
       <switch>
        <Route path="/MovieList" Movies={MovieList} />

        <Route  path="/" Movies={MovieCard} />

       </switch>

      </div>
      
    </div>
  );
}
