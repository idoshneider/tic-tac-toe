const UpdateButtonArr = (state = Array(9).fill(""), action) => {
  if (action.sym === "X" || action.sym === "O") {
    state[action.index] = action.sym;
  } else if (action.type === "clr") {
    state.fill("");
  } else if (action.type === "build") {
    state = Array(action.size).fill("");
  } else {
    state = state;
  }
  return state;
};
export default UpdateButtonArr;
