const UpdateHistory = (state = [], action) => {
  if (action.type === "X" || action.type === "O") {
    state.push([action.type,action.index]);
    return state;
  } else if (action.type === "clear") {
    state = [];
    return state;
  } 
  else if(action.type ==="goBack"){
    state.pop();
    return state;
  }
  else {
    return state;
  }
};
export default UpdateHistory;
