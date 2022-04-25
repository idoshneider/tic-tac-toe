
const UpdateSize = (state = 3,action) =>{
    // if(action.type >= 3){
    //     state = action.type;
    // }
    // return state;
    action.type >=3 ? state = action.type : state = 3; return state;
      
    }
export default UpdateSize;