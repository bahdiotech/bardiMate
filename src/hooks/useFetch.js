import { useState, useEffect } from 'react';

export const useFetch = (apiPath, pageNum, queryTerm) => {
    
    const [data, setData] = useState([]);
    const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}&query=${queryTerm || 'a'}&page=${pageNum}`

    useEffect(() => {
        const fetchMovies = async() =>{
          const response = await fetch(url);
          const json = await response.json();
          setData(json.results)
        }
        fetchMovies();
      }, [url, queryTerm]);


  return {data}
}
