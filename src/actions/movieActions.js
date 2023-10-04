export const saveMovies = (movieArr) => {
  //   console.log(movieArr);
  return {
    type: "SAVE-MOVIES",
    payload: movieArr,
  };
};

export const saveList = (data) => {
  return {
    type: "SAVE-LIST",
    payload: data,
  };
};