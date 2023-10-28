import { Button } from "flowbite-react";
import { Card } from "../components";
import { useFetch, useTittle } from "../hooks";
import { useState } from "react";

export const MovieList = ({ apiPath, title, favorites, setFavorites }) => {
  const [pageNum, setPageNum] = useState(1);

  useTittle(title);
  const handleClick = () => {
    setPageNum(pageNum + 1);
  };
  const { data: movies } = useFetch(apiPath, pageNum);

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start other:justify-evenly flex-wrap">
          {movies.map((movie) => (
            <Card
              favorites={favorites}
              handleClick={handleClick}
              setFavorites={setFavorites}
              key={movie.id}
              movie={movie}
            />
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
  );
};
