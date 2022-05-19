const UpdateTimer = (state = 10, action) => {
  //    state =  action.type === "decTime" ? state - 1 : state;
  state = state === 0 ? 10 : action.type === "decTime" ? state - 1 : action.type === "resetTime" ? 10 : state;
  return state;
};
export default UpdateTimer;
