
const DrawXorO = (state = 'X' ,action) =>{
    switch(action.type){
        case 'drawX':
            state = 'X'
            return state;
        case 'drawO':
            state = 'O'
            return state;
        default: return state;
    }
}
export default DrawXorO;