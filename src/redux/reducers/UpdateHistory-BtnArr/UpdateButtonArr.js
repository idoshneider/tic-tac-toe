const UpdateButtonArr = (state = Array(9).fill(""), action) => {
  if (action.sym === "X" || action.sym === "O") {
    state[action.index] = action.sym;
  } else if (action.type === "clr") {
    state.fill("");
    return state;
  } else if (action.type === "build") {
    return Array(action.size).fill("");
  } 
  else if(action.type === "goBack"){
    state[action.i] = "";
    return state;
  }
  else {
    return state;
  }
  return state;
};
export default UpdateButtonArr;
