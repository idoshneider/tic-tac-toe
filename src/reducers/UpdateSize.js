
const UpdateSize = (state = 3,action) =>{
    action.type >=3 ? state = action.type : state = state; return state;
}
export default UpdateSize;