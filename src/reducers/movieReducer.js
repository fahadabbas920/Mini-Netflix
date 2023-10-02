function movieReducer(
  state = {
    movieArray: [],
  },
  action
) {
  // console.log(action.payload);
  switch (action.type) {
    case "SAVE-MOVIES":
      return {
        ...state,
        // movieArray: state.movieArray.concat(action.payload),
        movieArray: action.payload,
      };
    case "SAVE-TRAILER":
      let temp = [];
      temp = state.movieArray.map((movie, i) => {
        return { ...movie, ...action.payload[i] };
      });

      return {
        ...state,
        movieArray: temp,
      };
    case "SAVE-SEARCHED":
      return {
        ...state,
        movieArray: state.movieArray.concat(action.payload),
      };

    default:
      return state;
  }
}

export default movieReducer;
