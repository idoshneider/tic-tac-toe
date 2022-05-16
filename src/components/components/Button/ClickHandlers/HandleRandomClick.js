import store from "../../../..";
import handleNextSymbolClick from "../../Game/DrawBoard/BoardClickHandler/HandleClickNextSymbol";

const handleRandomClick = () => {
    let buttonArr = store.getState().buttonArr;
    let freeBoxArr = [];
  for (let index = 0; index < buttonArr.length; index++) {
      if(buttonArr[index] === ''){
        freeBoxArr.push(index);
      }
      
  }
  let randomIndex = Math.floor(
    Math.random() * freeBoxArr.length - 1 + 1
  );
  handleNextSymbolClick(freeBoxArr[randomIndex]);
};
export default handleRandomClick;
