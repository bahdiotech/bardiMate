import { Rating } from "flowbite-react";
import { useParams } from "react-router";
import { useState, useEffect } from "react";

export const ReviewCard = () => {
    const params = useParams();
  const [movie, setMovie] = useState([]);
  let url = `https://api.themoviedb.org/3/movie/${params.id}/reviews?api_key=b80d59c33d6d57ed9c7e3713f91c188a`;

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await fetch(url);
      const json = await response.json();
      setMovie(json);
    };
    fetchMovie();
  }, [url]);

    


}
