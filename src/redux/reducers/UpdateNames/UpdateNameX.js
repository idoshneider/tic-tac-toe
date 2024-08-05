const UpdateNameX = (state = "Player X", action) => {
  state = typeof action.nameX === 'string' && action.nameX !== '' ? action.nameX : state;
  return state;
  };
  export default UpdateNameX;
  