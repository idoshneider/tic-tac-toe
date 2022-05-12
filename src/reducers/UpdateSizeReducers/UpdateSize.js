const UpdateSize = (state = 3, action) => {
  action.type >= 3 ? (state = Math.floor(action.type)) : (state = state);
  return state;
};
export default UpdateSize;
