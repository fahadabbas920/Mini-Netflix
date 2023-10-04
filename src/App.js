import "./App.css";
import Footer from "./components/Footer";
import Main from "./components/main/Main";
import Movie from "./components/movie/Movie";
import Navbar from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import FetchMovies from "./components/dataFetch/FetchMovies";
// import FetchTrailer from "./components/dataFetch/FetchTrailer";
import NotFound from "./components/NotFound";
import MyList from "./components/myList/MyList";

function App() {
  return (
    <div className="App">
      <FetchMovies />
      {/* <FetchTrailer /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movie/:ID" element={<Movie />} />
        <Route path="/mylist" element={<MyList/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
