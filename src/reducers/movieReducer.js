function movieReducer(state = [], action) {
  switch (action.type) {
    case "SAVE-MOVIES":
      return [...action.payload];

    default:
      return state;
  }
}

export default movieReducer;