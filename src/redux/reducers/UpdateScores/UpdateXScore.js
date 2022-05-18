const UpdateXScore = (state = 0, action) => {
    state = action.type === "increment" && action.incSym === 'X' ? state + 1 : state;
    state = action.type === "decrement" && action.decSym === 'X' ? state - 1 : state;
    state = action.type === "reset" ? 0 : state;
    return state;
  };
  export default UpdateXScore;
  