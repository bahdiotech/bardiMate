import { useState, useEffect } from "react";
import { useParams } from "react-router";
import backup from "../assets/images/backup.png";
import { RatingCount } from "../components";
import { useTittle } from "../hooks";

export const MovieDetail = () => {
  const params = useParams();
  const [movie, setMovie] = useState([]);
  let url = `https://api.themoviedb.org/3/movie/${params.id}?api_key=b80d59c33d6d57ed9c7e3713f91c188a`;
  
  function nFormatter(num, digits) {
    const lookup = [
      { value: 1, symbol: "" },
      { value: 1e3, symbol: "k" },
      { value: 1e6, symbol: "M" },
      { value: 1e9, symbol: "B" },
      { value: 1e12, symbol: "T" },
      { value: 1e15, symbol: "P" },
      { value: 1e18, symbol: "E" }
    ];
    
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    var item = lookup.slice().reverse().find(function(item) {
      return num >= item.value;
    });
    return item ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol : "0";
  }

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await fetch(url);
      const json = await response.json();
      setMovie(json);
    };
    fetchMovie();
  }, [url]);
  const image = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : backup;

  useTittle(movie.title);

  return (
    <main>
      <section className="flex justify-around flex-wrap py-5 dark:text-slate-100 m-5">
        <div className="max-w-sm">
          <img
            className="rounded"
            src={image}
            alt={`${movie.title} img`}
            title={movie.title}
          />
        </div>

        <div className="max-w-2xl text-lg">
          <h1 className="text-4xl font-bold my-3">{movie.title}</h1>
          <p className="my-4">{movie.overview}</p>
          {movie.genres ? (
            <p className="flex my-7 flex-wrap gap-2">
              {movie.genres.map((genre) => (
                <span
                  key={genre.id}
                  className="mr-2 border border-gray-300 dark:border-gray-600 p-2 rounded-md "
                >
                  {genre.name}
                </span>
              ))}
            </p>
          ) : (
            ""
          )}
          <RatingCount />

          <p className="my-4">
            <span className="mr-2 font-bold">Runtime:</span>
            <span>{movie.runtime ? movie.runtime : "null"} mins.</span>
          </p>
          <p className="my-4">
            <span className="mr-2 font-bold">Budget:</span>
            <span>{movie.budget ? `$${nFormatter( movie.budget, 1)}` : "null"}</span>
          </p>
          <p className="my-4">
            <span className="mr-2 font-bold">Revenue:</span>
            <span>{movie.revenue ? `$${nFormatter(movie.revenue, 1)}` : "null"}</span>
          </p>
          <p className="my-4">
            <span className="mr-2 font-bold">Released Date:</span>
            <span>{movie.release_date ? movie.release_date : "null"}</span>
          </p>
          <p className="my-4">
            <span className="mr-2 font-bold">IMDB:</span>
            <a
              className="underline text-blue-400 hover:no-underline"
              target="_blank"
              rel="noreferrer"
              href={`https://www.imdb.com/title/${movie.imdb_id}`}
              title={`IMDB Code: ${movie.imdb_id}`}
            >
              Watch Trailer here!
            </a>
          </p>
          <p className="my-4">
            <span className="mr-2 font-bold">Status:</span>
            <span>{movie.status ? movie.status : "null"}</span>
          </p>

          <p className="my-4">
            <span className="mr-2 font-bold">{`${
              movie.production_countries
                ? movie.production_countries.length >= 2
                  ? "Production Countries:"
                  : "Production Country:"
                : "null"
            } `}</span>
            {movie.production_countries
              ? movie.production_countries.map((country,index) => (
                  <span key={index} className="mr-2">{country.name},</span>
                ))
              : "null"}
          </p>

          <p className="my-4">
            <span className="mr-2 font-bold">
              {movie.production_companies &&
              movie.production_companies.length >= 2
                ? "Production Companies:"
                : "Production Company:"}
            </span>
            {movie.production_companies
              ? movie.production_companies.map((company) => (
                  <span key={company.id} className="mr-2">
                    {company.name}{" "}
                    <i className="text-slate-400">{company.origin_country}</i> ,
                  </span>
                ))
              : "null"}
          </p>

          <p className="my-4">
            <span className="mr-2 font-bold">Original Language:</span>
            <span>
              {movie.original_language
                ? movie.original_language.toUpperCase()
                : "null"}
            </span>
          </p>

          <p className="my-4">
            <span className="mr-2 font-bold">
              {movie.spoken_languages && movie.spoken_languages.length >= 2
                ? "Spoken Languages:"
                : "Spoken Language:"}
            </span>
            {movie.spoken_languages
              ? movie.spoken_languages.map((language, index) => (
                  <span key={index} className="mr-2">
                    {language.name}{" "}
                    <i className="text-slate-400 text-sm">
                      {language.english_name}
                    </i>{" "}
                    ,
                  </span>
                ))
              : "null"}
          </p>

          <p className="my-4">
            <span className="mr-2 font-bold">Popularity:</span>
            <span>{movie.popularity ? movie.popularity : "null"}</span>
          </p>
          <p className="my-4">
            <span className="mr-2 font-bold">Tagline:</span>
            <span>{movie.tagline ? movie.tagline : "null"}</span>
          </p>
        </div>
      </section>
    </main>
  );
};
