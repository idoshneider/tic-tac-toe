const UpdateHistory = (state = [], action) => {
  if (action.type === "X" || action.type === "O") {
    state.push(action.type);
  } else if (action.type === "clear") {
    state = [];
  } else {
    state = state;
  }
  return state;
};
export default UpdateHistory;
