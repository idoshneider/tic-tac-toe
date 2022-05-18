const UpdateSize = (state = 3, action) => {
  state = action.type >= 3 ? (Math.floor(action.type)) : (state);
  return state;
};
export default UpdateSize;
