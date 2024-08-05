const UpdateNumSize = (state = 3, action) => {
  state = action.typenum >= 3 ? (Math.floor(action.typenum)) : (state);
  return state;
};
export default UpdateNumSize;
