const UpdateNameO = (state = "Player O", action) => {
    state = typeof action.nameO === 'string' && action.nameO !== '' ? action.nameO : state;
    return state;
  };
  export default UpdateNameO;
  