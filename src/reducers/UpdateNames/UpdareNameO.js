const UpdateNameO = (state = "Player O", action) => {
    typeof action.nameO === 'string' && action.nameO !== '' ? state = action.nameO : state = state;
    return state;
  };
  export default UpdateNameO;
  