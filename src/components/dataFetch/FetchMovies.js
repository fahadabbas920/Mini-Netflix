import useFetch from "../../useFetch/useFetch";
// import { useSelector } from "react-redux/es/hooks/useSelector";
import { saveMovies } from "../../actions/movieActions";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
function FetchMovies() {
  // const movies = useSelector((state) => state.moviesArray);
  const dispatch = useDispatch();
  const key = "7d9f393";
  const url = `http://www.omdbapi.com/?i=customID&apikey=${key}`;
  const { data, error } = useFetch(url);

  useEffect(() => {
    let Movies = [];
    if (data.length !== 0) {
      Movies = data.map((movie) => {
        return movie.data;
      });
    }
    dispatch(saveMovies(Movies));
  }, [dispatch, data]);

  console.log(data);
  // data.map((movie) => {
  //   console.log(movie.data);
  // });
  // console.log(error);

  return;
}

export default FetchMovies;
