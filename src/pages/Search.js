// import { useSearchParams } from "react-router-dom";
import { Card } from "../components";
import { useFetch, useTittle } from "../hooks";
import {  } from "../hooks/useTittle";
import { useState,useEffect } from "react";
import { Button } from "flowbite-react";


export const Search = ({apiPath, favorites, setFavorites, value}) => {
  const [pageNum, setPageNum] = useState(1);

  const handleClick = () => {
    setPageNum(pageNum + 1);
  };

  // const [searchParams] = useSearchParams();
  // const queryTerm = searchParams.get('q')
  const {data: movies } = useFetch(apiPath, pageNum, value)
useTittle(`Search Result for ${value}`)

useEffect(() => {
  window.scrollTo(0, 0);
}, [pageNum]);

// useEffect(() => {
//   value.length === 0 || 
// }, [input]);

  return (
    <main>
      <section className="text-2xl text-gray-700 dark:text-white">
        {value.length > 0 && 
        <p>{movies.length === 0? `No result found for '${value}'`: `Search result for '${value}'` }</p>
}
      </section>
    <section className="max-w-7xl mx-auto py-7">
      <div className="flex justify-start other:justify-evenly flex-wrap">
        {movies.map((movie) => (
          <Card favorites={favorites} setFavorites={setFavorites} key={movie.id} movie={movie} />
        ))}
      </div>
     
    </section>
    <div className="flex  justify-between">
          <div>
          <Button className={`${pageNum === 1? 'hidden' : ''} h-10`} onClick={() =>setPageNum(pageNum - 1)}>Previous Page</Button>
          </div>
          <div>
          <Button className={`${movies.length  < 20? 'hidden' : ''} h-10`} onClick={handleClick}>Next Page</Button>
          </div>
        </div>
  </main>
  )
}
