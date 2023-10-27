
import { Routes, Route} from "react-router-dom";
import { MovieList, MovieDetail, Search, PageNotFound} from "../pages";
import { Favecard } from "../pages/Favecard";
import { useState } from "react";
import { useEffect } from "react";

export const AllRoutes = () => {

  const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favorites')) || []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites))

  }, [favorites])
  
  return(
    <div className="dark:bg-darkbg">
    <Routes>
        <Route path="" element={<MovieList favorites={favorites} setFavorites={setFavorites} apiPath='movie/now_playing' title='Home' />} />
        <Route path="/movie/:id" element={<MovieDetail apiPath='' />} title='' />
        <Route path="/movies/popular" element={<MovieList  favorites={favorites} setFavorites={setFavorites} apiPath='movie/popular' title='Popular' />} />
        <Route path="/movies/top" element={<MovieList favorites={favorites} setFavorites={setFavorites} apiPath='movie/top_rated' title='TopRated' />} />
        <Route path="/movies/upcoming" element={<MovieList favorites={favorites} setFavorites={setFavorites} apiPath='movie/upcoming' title='Upcoming' />} />
        <Route path="/search" element={<Search apiPath='search/movie' title='' />} />
        <Route path="*" element={<PageNotFound title='PageNotFound' />} />
        <Route path="/movies/favorites" element={<Favecard favorites={favorites} setFavorites={setFavorites} />} />
    </Routes>
    </div>
  )
};
