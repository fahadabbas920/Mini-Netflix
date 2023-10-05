import axios from "axios";
import { useEffect, useMemo, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, seterror] = useState("Null");
  const controller = useMemo(() => {
    return new AbortController();
  }, []);
  // const controller =
  console.log(url, "url")

  useEffect(() => {
    console.log("controller: ", controller);
    axios
      .get(url, {
        signal: controller.signal,
      })
      .then((data) => setData(data))
      .catch((error) => seterror(error));
  }, [url, controller]);
  return { data, error, controller };
};

export default useFetch;
