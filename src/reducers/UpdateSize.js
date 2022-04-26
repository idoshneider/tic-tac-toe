
const UpdateSize = (state = 3,action) =>{
    // if(action.type >= 3){
    //     state = action.type;
    // }
    // return state;
    action.type >=3 ? state = action.type : state = state; return state;
      
    }
export default UpdateSize;