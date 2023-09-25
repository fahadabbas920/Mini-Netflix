import "./App.css";
import Footer from "./components/Footer";
import Main from "./components/main/Main";
import Movie from "./components/movie/Movie";
import Navbar from "./components/navbar/Navbar";
import useFetch from "./useFetch/useFetch";
import { Routes, Route } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";

function App() {
  const { data } = useFetch();
  // const movies = useSelector()
  console.log(data);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movie/:name" element={<Movie />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
