import React from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../useFetch/useFetch";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { saveSearched } from "../../actions/movieActions";

function SearchMovie({ dataA }) {
  const movies = useSelector((state) => state.movieArray);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const url = `https://yts.mx/api/v2/movie_details.json?imdb_id=${dataA.imdbID}&with_images=true&with_cast=true`;
  const { data, error } = useFetch(url);
  // console.log(data[0].data.data.movie);


  // const MOV = [...movies];
  console.log(data);
  // debugger;
  useEffect(() => {
    if (data.length !== 0) {
      const obj = {
        Genre: data[0].data.data.movie.genres,
        background_image: data[0].data.data.movie.background_image_original,
        yt_trailer_code: data[0].data.data.movie.yt_trailer_code,
      };
      console.log(obj);
      const dd = movies.filter((movie) => movie.imdbID === dataA.imdbID);
      if (dd.length === 0) {
        dispatch(saveSearched({ ...dataA, ...obj }));
        // console.log("hhahah")
      }
      // console.log(dd)

      // movies.forEach()
    }
    // console.log (movies.filter(movie=>movie.imdbID===dataA.imdbID))

    // function getKeyByValue(object, value) {
    //   return Object.keys(object).find((key) => object[key] === value);
    // }

    // movies.forEach((movie) => {
    //   if (getKeyByValue(movie, "imdbID") !== dataA.imdbID) {
    //     dispatch(saveSearched({ ...dataA, ...obj }));
    //   }
    // });
    // }
  }, [dispatch, data, dataA,movies]);

  return (
    <div className="navbar-notification">
      <div className="navbar-notification-container">
        <div
          onClick={() => {
            navigate(`/movie/${dataA.imdbID}`);
          }}
        >
          <div>
            <img src={dataA.Poster} alt="" />
          </div>
          <div>
            <h3>{dataA.Title}</h3>
            <p>{dataA.Plot}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchMovie;
