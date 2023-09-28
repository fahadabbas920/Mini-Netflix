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
import NotFound from "./components/NotFound";

function App() {
  const { data } = useFetch();
  console.log(data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(save(data));
  }, [dispatch, data]);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movie/:ID" element={<Movie />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
