function movieReducer(
  state = {
    movieArray: [],
  },
  action
) {
  switch (action.type) {
    case "SAVE":
      return { ...state, movieArray: action.payload };
    // case "GET-MOVIE":
    //   const movie = state.movieArray.filter((movie) => {
    //     return movie.imdbID === action.payload;
    //   });
    //   return { movie };
    // case "":
    //   break;
    // case "":
    //   break;
    default:
      return state;
  }
}

export default movieReducer;
