import "./App.css";
import Footer from "./components/Footer";
import Main from "./components/main/Main";
import Movie from "./components/movie/Movie";
import Navbar from "./components/navbar/Navbar";
import useFetch from "./useFetch/useFetch";
import { Routes, Route } from "react-router-dom";
// import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
import { save } from "./actions/movieActions";
import { useEffect } from "react";

function App() {
  const { data } = useFetch();
  // const movieReducer = useSelector((state) => state.movieArray);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(save(data));
  }, [dispatch, data]);
  // console.log(data);
  // console.log(movieReducer);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movie/:ID" element={<Movie />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
