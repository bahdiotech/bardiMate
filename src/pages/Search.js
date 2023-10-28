import { useSearchParams } from "react-router-dom";
import { Card } from "../components";
import { useFetch, useTittle } from "../hooks";
import {  } from "../hooks/useTittle";
import { useState } from "react";
import { Button } from "flowbite-react";


export const Search = ({apiPath, favorites, setFavorites}) => {
  const [pageNum, setPageNum] = useState(1);

  const handleClick = () => {
    setPageNum(pageNum + 1);
  };

  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get('q')
  const {data: movies } = useFetch(apiPath, pageNum, queryTerm)
useTittle(`Search Result for ${queryTerm}`)

  return (
    <main>
      <section className="text-2xl text-gray-700 dark:text-white">
        <p>{movies.length === 0? `No result found for '${queryTerm}'`: `Search result for '${queryTerm}'` }</p>
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
