
import { Link } from "react-router-dom";
import backup from '../assets/images/backup.png'


export const Card = ({movie}) => {
  const {id, title, overview, poster_path } = movie
  const image = poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : backup;
  

  return (
    <div>
      <div className="max-w-sm h-[50rem] overflow-hidden bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-4">
        <Link to={`/movie/${id}`}>
          <img
            className="rounded-t-lg"
            src={image}
            alt={title}
            title={title}
          />
        </Link>
        <div className="p-5">
          <Link to={`/movie/${id}`}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-justify text-gray-900 dark:text-white">
            {title}
            </h5>
          </Link>
          { overview.length <= 240 ? 
          (<p className="mb-3 font-normal text-gray-700 text-justify dark:text-gray-400">
            {overview}
          </p>) :  (<p className="mb-3 font-normal text-gray-700 text-justify dark:text-gray-400">
            {overview.slice(0,240)}.. <Link to={`/movie/${id}`} className="text-blue-400 cursor-pointer">read more..</Link>
          </p> )
}
        </div>
      </div>
    </div>
  );
};
