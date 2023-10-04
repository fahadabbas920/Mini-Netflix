import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, seterror] = useState("Null");

  useEffect(() => {
    axios
      .get(url)
      .then((data) => setData(data))
      .catch((error) => seterror(error));
  }, [url]);
  return { data, error };
};

export default useFetch;