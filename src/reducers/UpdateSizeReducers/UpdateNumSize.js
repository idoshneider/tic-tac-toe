
const UpdateNumSize = (state = 3,action) =>{
    action.typenum >=3 ? state = action.typenum : state = state; return state;
}
export default UpdateNumSize;