const UpdateXScore = (state = 0, action) => {
    action.type === "increment" && action.incSym === 'X' ? state = state + 1 : state = state;
    action.type === "reset" ? state = 0 : state = state;
    return state;
  };
  export default UpdateXScore;
  