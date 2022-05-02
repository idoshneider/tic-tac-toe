
const GameOverOrNot = (state = false ,action) =>{
    switch(action.type){
        case 'Game Over':
            state = true;
            return state;
        case '':
            state = false;
            return state;
        default: return state;
    }
}
export default GameOverOrNot;