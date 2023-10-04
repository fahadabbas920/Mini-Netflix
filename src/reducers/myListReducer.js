function myListReducer(state = [], action) {
  switch (action.type) {
    case "SAVE-LIST":
      return [...action.payload];

    default:
      return state;
  }
}

export default myListReducer;
