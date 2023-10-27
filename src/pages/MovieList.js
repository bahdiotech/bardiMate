
import { Card } from "../components";
import { useFetch, useTittle } from "../hooks";

export const MovieList = ({apiPath, title, favorites, setFavorites}) => {
  const {data: movies } = useFetch(apiPath)
  useTittle(title)
  // console.log(movies)

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start other:justify-evenly flex-wrap">
          {movies.map((movie) => (
            <Card favorites={favorites} setFavorites={setFavorites} key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};
