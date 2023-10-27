import { Link } from "react-router-dom";
import backup from "../assets/images/backup.png";
import { ButtonWithIcon } from "./BottonWithIcon";

export const Card = ({ movie, favorites, setFavorites }) => {
  const { id, title, overview, poster_path } = movie;
  const image = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : backup;

  const handleAdd = (id) => {

    if (movie.id === id && favorites.every((todo) => todo.id !== id)) {
      setFavorites([
        ...favorites,
        {
          id: movie.id,
          overview: movie.overview,
          poster_path: movie.poster_path,
          title: movie.title
        },
      ]);
    } else {
      alert(`you already added '${movie.title}' to your favorite`);
    }
    
  };


  return (
    <div>
      <div className="max-w-sm relative h-[50rem] overflow-hidden bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-4">
        <Link to={`/movie/${id}`}>
          <img className="rounded-t-lg" src={image} alt={title} title={title} />
        </Link>
        <div className="p-5 h-[10rem]">
          <Link to={`/movie/${id}`}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-justify text-gray-900 dark:text-white">
              {title}
            </h5>
          </Link>
          {overview.length <= 120 ? (
            <p className="mb-3 font-normal text-gray-700 text-justify dark:text-gray-400">
              {overview}{" "}
              <Link
                to={`/movie/${id}`}
                className="text-blue-400 cursor-pointer"
              >
                read more
              </Link>
            </p>
          ) : (
            <p className="mb-3 font-normal text-gray-700 text-justify dark:text-gray-400">
              {overview.slice(0, 120)}..{" "}
              <Link
                to={`/movie/${id}`}
                className="text-blue-400 cursor-pointer"
              >
                read more
              </Link>
            </p>
          )}
        </div>
        <ButtonWithIcon
          onClick={() =>handleAdd(id)}
          className="absolute inset-x-7 bottom-4 z-10 h-9 w-45 hover:bg-gradient-to-br"
        >
          Add to Favorites
        </ButtonWithIcon>
      </div>
    </div>
  );
};
