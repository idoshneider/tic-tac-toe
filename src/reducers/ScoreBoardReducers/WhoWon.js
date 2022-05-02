
const WhoWon = (state = '' ,action) =>{
    switch(action.type){
        case "winner is X":
            state = "Winner is X"
            return state;
        case "winner is O":
            state = "Winner is O"
            return state;
        case "":
            state = ''
            return state;
        default: return state;
    }
}
export default WhoWon;