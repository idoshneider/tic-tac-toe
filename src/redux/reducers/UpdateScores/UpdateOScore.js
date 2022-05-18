const UpdateOScore = (state = 0, action) => {
    state = action.type === "increment" && action.incSym === 'O' ? state + 1 : state;
    state = action.type === "decrement" && action.decSym === 'O' ? state - 1 : state;
    state = action.type === "reset" ?  0 : state;
    return state;
  };
  export default UpdateOScore;
  