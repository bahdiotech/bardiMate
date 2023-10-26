import { Rating } from "flowbite-react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

export const RatingCount = () => {
  const params = useParams();
  const [toggle, setToggle] = useState(false);
  const [movie, setMovie] = useState([]);
  let url = `https://api.themoviedb.org/3/movie/${params.id}?api_key=b80d59c33d6d57ed9c7e3713f91c188a`;

  const handleNavigate = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await fetch(url);
      const json = await response.json();
      setMovie(json);
    };
    fetchMovie();
  }, [url]);

  return (
    <Rating>
      <Rating.Star />
      <p className="ml-2 text-sm text-gray-900 dark:text-white">
        {movie.vote_average ? movie.vote_average.toFixed(2) : ""}
      </p>
      <span className="mx-1.5 h-1 w-1 rounded-full bg-gray-500 dark:bg-gray-400" />
      <div
        className="text-sm font-medium text-gray-900 dark:text-white"
        onClick={handleNavigate}
      >
        <p className="mr-4">
          {movie.vote_count}
          <i className="ml-1">reviews</i>
        </p>
      </div>
    </Rating>
  );
};
