import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const movieArray = [
      "65",
      "Shrek",
      "Kingdom",
      "Evil Dead",
      "Minions",
      "jurassic park",
      "hulk",
      "gta",
      "barbie",
      "annabelle",
      "need for speed",
    ];
    const key = "7d9f393";
    const dataList = movieArray.map((movie) => {
      return new Promise((resolve, reject) => {
        axios
          .get(`http://www.omdbapi.com/?t=${movie}&apikey=${key}`)
          .then((data) => resolve(data.data))
          .catch((error) => console.log(error));
      });
    });

    Promise.all(dataList).then((message) => {
      setData(message);
    });
  }, []);

  return { data };
};

export default useFetch;
