import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const movieArray = ["65", "Shrek", "Kingdom", "Evil Dead", "Minions"];
    const dataList = movieArray.map((movie) => {
      return new Promise((resolve, reject) => {
        axios
          .get(`http://www.omdbapi.com/?t=${movie}&apikey=7d9f393`)
          .then((data) => resolve(data.data));
      });
    });

    Promise.all(dataList).then((message) => {
      setData(message);
    });
  }, []);

  return { data };
};

export default useFetch;
