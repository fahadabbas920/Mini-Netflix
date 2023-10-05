function bgRefReducer(state = 0, action) {
  switch (action.type) {
    case "SAVE-BG":
      return action.payload;

    default:
      return state;
  }
}

export default bgRefReducer;
