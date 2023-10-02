import useFetch from "../../useFetch/useFetch";
import { saveTrailer } from "../../actions/movieActions";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function FetchTrailer() {
  //   const id = null;
  const dispatch = useDispatch();
  const url = `https://yts.mx/api/v2/movie_details.json?imdb_id=customID&with_images=true&with_cast=true`;

  const { data, error } = useFetch(url);
  // const
  useEffect(() => {
    let Movies = [];
    if (data.length !== 0) {
      Movies = data.map((movie) => {
        return {
          Genre: movie.data.data.movie.genres,
          background_image: movie.data.data.movie.background_image_original,
          yt_trailer_code: movie.data.data.movie.yt_trailer_code,
        };
      });
    }
    dispatch(saveTrailer(Movies));
    console.log(Movies);
  }, [dispatch, data]);

  // data.map((movie) => {
  //   console.log(movie.data.data.movie);
  // });
  // console.log(data);
  // console.log(error);

  return;
}

export default FetchTrailer;
