import useFetch from "../../useFetch/useFetch";
import { saveMovies } from "../../actions/movieActions";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
function FetchMovies() {
  const dispatch = useDispatch();
  const url = `https://yts.mx/api/v2/list_movies.json?limit=10&genre=sci-fi`;
  // const controller = new AbortController();
  // console.log(data)
  const { data } = useFetch(url);
  // controller.abort();
  useEffect(() => {
    if (data.length !== 0) {
      let movies = [...data.data.data.movies];
      dispatch(saveMovies(movies));
    }
  }, [data, dispatch]);
  return;
}

export default FetchMovies;
