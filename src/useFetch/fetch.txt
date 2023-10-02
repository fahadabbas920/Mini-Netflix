import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const idArray = [
      "tt12261776",
      "tt0126029",
      "tt0451279",
      "tt1288558",
      "tt2293640",
      "tt0107290",
      "tt0286716",
      "tt0046534",
      "tt1517268",
      "tt3322940",
      "tt2369135",
    ];

    // const movieArray = [
    //   "65",
    //   "Shrek",
    //   "Wonder woman",
    //   "Evil Dead",
    //   "Minions",
    //   "jurassic park",
    //   "hulk",
    //   "the war of the worlds",
    //   "barbie",
    //   "annabelle",
    //   "need for speed",
    // ];
    const key = "7d9f393";
    const dataList = idArray.map((id) => {
      return new Promise((resolve, reject) => {
        axios
          .get(`http://www.omdbapi.com/?i=${id}&apikey=${key}`)
          .then((data) => resolve(data.data))
          .catch((error) => console.log(error));
      });
    });

    Promise.all(dataList).then((message) => {
      setData(message);
    });
    const newDataList = idArray.map((id) => {
      return new Promise((resolve, reject) => {
        axios
          .get(
            `https://yts.mx/api/v2/movie_details.json?imdb_id=${id}&with_images=true&with_cast=true
          `
          )
          .then((data) =>
            resolve({
              // Genre: data.data.data.movie.genres,
              background_image: data.data.data.movie.background_image_original,
              yt_trailer_code: data.data.data.movie.yt_trailer_code,
            })
          )
          .catch((error) => console.log(error));
      });
    });

    Promise.all(newDataList).then((message) => {
      console.log(message);

      setData(
        (state) =>
          (state = state.map((movie, i) => {
            return { ...movie, ...message[i] };
          }))
      );
      console.log(message);
    });
  }, []);
  // console.log(data);
  return { data };
};

export default useFetch;

// `https://yts.mx/api/v2/movie_details.json?imdb_id=${id}&with_images=true&with_cast=true
//           `

// {
//   Actors: data.data.data.movie.cast.map((person) => {
//     return person.name;
//   }),
//   Awards: "N/A",
//   BoxOffice: "N/A",
//   Country: "N/A",
//   DVD: "N/A",
//   Director: "N/A",
//   Genre: data.data.data.movie.genres,
//   Language: data.data.data.movie.language,
//   Metascore: "N/A",
//   Plot: data.data.data.movie.description_intro.slice(0,200),
//   Poster: data.data.data.movie.large_cover_image,
//   Production: data.data.data.movie.year,
//   Rated: data.data.data.movie.mpa_rating,
//   Ratings: data.data.data.movie.rating,
//   Released: data.data.data.movie.year,
//   Response: "N/A",
//   Runtime: data.data.data.movie.runtime,
//   Title: data.data.data.movie.title,
//   Type: "N/A",
//   Website: "N/A",
//   Writer: "N/A",
//   Year: data.data.data.movie.year,
//   imdbID: data.data.data.movie.imdb_code,
//   imdbRating: data.data.data.movie.rating,
//   imdbVotes: "N/A",
//   background_image: data.data.data.movie.background_image_original,
//   yt_trailer_code: data.data.data.movie.yt_trailer_code,
// }
