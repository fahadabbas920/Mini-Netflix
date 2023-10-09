function notificationReducer(state = 0, action) {
  switch (action.type) {
    case "SAVE-NOTIFY":
      return action.payload;

    default:
      return state;
  }
}

export default notificationReducer;
