const UpdateOScore = (state = 0, action) => {
    action.type === "increment" && action.incSym === 'O' ? state = state + 1 : state = state;
    action.type === "reset" ? state = 0 : state = state;
    return state;
  };
  export default UpdateOScore;
  