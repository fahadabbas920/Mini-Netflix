export const saveMovies = (movieArr) => {
  //   console.log(movieArr);
  return {
    type: "SAVE-MOVIES",
    payload: movieArr,
  };
};

export const saveTrailer = (data) => {
  return {
    type: "SAVE-TRAILER",
    payload: data,
  };
};
export const saveSearched = (data) => {
  return {
    type: "SAVE-SEARCHED",
    payload: data,
  };
};
