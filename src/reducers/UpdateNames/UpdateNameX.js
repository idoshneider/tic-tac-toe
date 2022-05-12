const UpdateNameX = (state = "Player X", action) => {
  typeof action.nameX === 'string' && action.nameX !== '' ? state = action.nameX : state = state;
  return state;
  };
  export default UpdateNameX;
  