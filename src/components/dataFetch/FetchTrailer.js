// import useFetch from "../../useFetch/useFetch";
// import { saveTrailer } from "../../actions/movieActions";
// import { useEffect } from "react";
// import { useDispatch } from "react-redux";

function FetchTrailer() {
  // const idArray = [
  //   "tt12261776",
  //   "tt0126029",
  //   "tt0451279",
  //   "tt1288558",
  //   "tt2293640",
  //   "tt0107290",
  //   "tt0286716",
  //   "tt0046534",
  //   "tt1517268",
  //   "tt3322940",
  //   "tt2369135",
  // ];
  // const dispatch = useDispatch();
  // const url = `https://yts.mx/api/v2/movie_details.json?imdb_id=customID&with_images=true&with_cast=true`;

  // const { data } = useFetch(url, idArray);
  // useEffect(() => {
  //   let Movies = [];
  //   if (data.length !== 0) {
  //     Movies = data.map((movie) => {
  //       return {
  //         Genre: movie.data.data.movie.genres,
  //         background_image: movie.data.data.movie.background_image_original,
  //         yt_trailer_code: movie.data.data.movie.yt_trailer_code,
  //       };
  //     });
  //   }
  //   dispatch(saveTrailer(Movies));
  //   console.log(Movies);
  // }, [dispatch, data]);

  return;
}

export default FetchTrailer;
