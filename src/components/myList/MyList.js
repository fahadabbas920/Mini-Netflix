import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import "./mylist.css";
import MyListMovieThumb from "./MyListMovieThumb";

function MyList() {
  const myList = useSelector((state) => state.myList);
  // console.log(myList);
  return (
    <div className="mylist-container">
      <h1>My List</h1>
      <ul className="mylist-ul">
        {myList?.map((movie) => {
          return (
            <MyListMovieThumb
              key={movie.id}
              poster={movie.large_cover_image}
              ID={movie.id}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default MyList;
