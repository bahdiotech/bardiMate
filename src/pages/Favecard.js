import React from "react";
import { Link } from "react-router-dom";
import backup from "../assets/images/backup.png";
import { Button } from "flowbite-react";
import { Button as Homebut } from "../components";

export const Favecard = ({ favorites, setFavorites }) => {
  // const image = favorite.poster_path
  //   ? `https://image.tmdb.org/t/p/w500${favorite.poster_path.poster_path}`
  //   : backup;

  const handleDel = (id) => {
    const updatedFave = favorites.filter((favorite) => favorite.id !== id);
    setFavorites(updatedFave);
  };

  const handleReset = () => {
    setFavorites([]);
  };

  function removeDuplicates(data) {
    return data.filter((value, index)=>  data.indexOf(value) === index)
    };
    
  const filteredArr = removeDuplicates(favorites)
  console.log(filteredArr)

  return (
    <section>
      <div className="flex justify-center">
      <Button
                gradientMonochrome="failure"
                onClick={() => handleReset(filteredArr.map((fave) => fave.id))}
                className={`${filteredArr.length < 1 ? 'hidden': ''} relative  top-2 text-center  bg-red-600  bottom-4 z-10 h-9 w-45 hover:bg-gradient-to-br`}
              > Clear Favorites</Button>
              <div className="absolute  min-h-[400px] w-full flex justify-center items-center">
          <Link className={`${filteredArr.length >=1 ? 'hidden' : ''} `} to='/' ><Homebut>Add favorites</Homebut></Link>
          </div>
      </div>
      <div className="min-h-[600px] w-full flex justify-start other:justify-evenly flex-wrap">
        {filteredArr.map((favorite) => (
          <div
            key={favorite.id}
            className="max-w-sm relative h-[50rem] overflow-hidden bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-4"
          >
            <Link to={`/movie/${favorite.id}`}>
              <img
                className="rounded-t-lg"
                src={
                  favorite.poster_path
                    ? `https://image.tmdb.org/t/p/w500${favorite.poster_path}`
                    : backup
                }
                alt={favorite.title}
                title={favorite.title}
              />
            </Link>
            <div className="p-5 h-[10rem]">
              <Link to={`/movie/${favorite.id}`}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-justify text-gray-900 dark:text-white">
                  {favorite.title}
                </h5>
              </Link>
              {favorite.overview.length <= 120 ? (
                <p className="mb-3 font-normal text-gray-700 text-justify dark:text-gray-400">
                  {favorite.overview}{" "}
                  <Link
                    to={`/movie/${favorite.id}`}
                    className="text-blue-400 cursor-pointer"
                  >
                    read more
                  </Link>
                </p>
              ) : (
                <p className="mb-3 font-normal text-gray-700 text-justify dark:text-gray-400">
                  {favorite.overview.slice(0, 120)}..{" "}
                  <Link
                    to={`/movie/${favorite.id}`}
                    className="text-blue-400 cursor-pointer"
                  >
                    read more
                  </Link>
                </p>
              )}
            </div>

            <Button
              gradientMonochrome="failure"
              onClick={() => handleDel(favorite.id)}
              className="absolute  bg-red-600 inset-x-7 bottom-4 z-10 h-9 w-45 hover:bg-gradient-to-br"
            >
              Remove from Favorites
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};
