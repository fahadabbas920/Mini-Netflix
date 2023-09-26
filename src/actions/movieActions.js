export const save = (movieArr) => {
  //   console.log(movieArr);
  return {
    type: "SAVE",
    payload: movieArr,
  };
};

export const getMovie = (id) => {
  return {
    type: "GET-MOVIE",
    payload: id,
  };
};
