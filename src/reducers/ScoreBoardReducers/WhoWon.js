
const WhoWon = (state = '' ,action) =>{
    switch(action.type){
        case "winner is X":
            state = action.type
            return state;
        case "winner is O":
            state = action.type
            return state;
        case "":
            state = action.type
            return state;
        default: return state;
    }
}
export default WhoWon;