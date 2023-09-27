import React, { useEffect, useRef, useMemo, useState } from "react";
import Slider from "./Slider";
import MainMoviePoster from "./MainMoviePoster";
import { useSelector } from "react-redux/es/hooks/useSelector";

function Main() {
  const movies = useSelector((state) => state.movieArray);
  const [state, setstate] = useState(0);
  // const bgRef = useRef(0);
  const backgroundRef = useRef(null);
  const heading = useMemo(() => {
    return <Slider movies={movies} />;
  }, [movies]);

  useEffect(() => {
    if (movies.length !== 0 && backgroundRef.current !== null) {
      backgroundRef.current.style.backgroundImage = `url(${movies[state].Poster})`;
      const interval = setInterval(() => {
        state === movies.length - 1 ? setstate(0) : setstate((s) => s + 1);
        backgroundRef.current.style.backgroundImage = `url(${movies[state].Poster})`;
      }, 60 * 1000);
      return () => clearInterval(interval);
    }
  }, [movies, state]);

  return (
    <>
      <div className="main-bg" ref={backgroundRef}></div>
      <div className="main-container">
        {movies.length !== 0 && <MainMoviePoster data={movies[state]} />}
        {heading}
      </div>
    </>
  );
}

export default Main;
