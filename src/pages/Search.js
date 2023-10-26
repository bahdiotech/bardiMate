import { useSearchParams } from "react-router-dom";
import { Card } from "../components";
import { useFetch, useTittle } from "../hooks";
import {  } from "../hooks/useTittle";


export const Search = ({apiPath}) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get('q')
  const {data: movies } = useFetch(apiPath,queryTerm)
useTittle(`Search Result for ${queryTerm}`)

  return (
    <main>
      <section className="text-2xl text-gray-700 dark:text-white">
        <p>{movies.length === 0? `No result found for '${queryTerm}'`: `Search result for '${queryTerm}'` }</p>
      </section>
    <section className="max-w-7xl mx-auto py-7">
      <div className="flex justify-start other:justify-evenly flex-wrap">
        {movies.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  </main>
  )
}
