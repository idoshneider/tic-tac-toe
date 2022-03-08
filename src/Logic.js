import React from "react";
export function IsWin(buttonArr,flag){
    if(buttonArr[0] === buttonArr[1] && buttonArr[1] === buttonArr[2] && buttonArr[0] !== ''){
        document.getElementById('0').style.backgroundColor = '#008000'
        document.getElementById('1').style.backgroundColor = '#008000'
        document.getElementById('2').style.backgroundColor = '#008000'
        return "winner is " + buttonArr[0];
    }
    else if(buttonArr[3] === buttonArr[4] && buttonArr[4] === buttonArr[5] && buttonArr[3] !== ''){
        document.getElementById('3').style.backgroundColor = '#008000'
        document.getElementById('4').style.backgroundColor = '#008000'
        document.getElementById('5').style.backgroundColor = '#008000'
        return "winner is " + buttonArr[3];
    }
    else if(buttonArr[6] === buttonArr[7] && buttonArr[7] === buttonArr[8] && buttonArr[6] !== ''){
        document.getElementById('6').style.backgroundColor = '#008000'
        document.getElementById('7').style.backgroundColor = '#008000'
        document.getElementById('8').style.backgroundColor = '#008000'
        return "winner is " + buttonArr[6];
    }
    else if(buttonArr[0] === buttonArr[3] && buttonArr[3] === buttonArr[6] && buttonArr[0] !== ''){
        document.getElementById('0').style.backgroundColor = '#008000'
        document.getElementById('3').style.backgroundColor = '#008000'
        document.getElementById('6').style.backgroundColor = '#008000'
        return "winner is " + buttonArr[0];
    }
    else if(buttonArr[1] === buttonArr[4] && buttonArr[4]=== buttonArr[7] && buttonArr[1 ] !== ''){
        document.getElementById('1').style.backgroundColor = '#008000'
        document.getElementById('4').style.backgroundColor = '#008000'
        document.getElementById('7').style.backgroundColor = '#008000'
        return "winner is " + buttonArr[1];
    }
    else if(buttonArr[2] === buttonArr[5] && buttonArr[5] === buttonArr[8] && buttonArr[2] !== ''){
        document.getElementById('2').style.backgroundColor = '#008000'
        document.getElementById('5').style.backgroundColor = '#008000'
        document.getElementById('8').style.backgroundColor = '#008000'
        return "winner is " + buttonArr[2];
    }
    else if(buttonArr[0] === buttonArr[4] && buttonArr[4] === buttonArr[8] && buttonArr[0] !== ''){
        document.getElementById('0').style.backgroundColor = '#008000'
        document.getElementById('4').style.backgroundColor = '#008000'
        document.getElementById('8').style.backgroundColor = '#008000'
        return "winner is " + buttonArr[0];
        
    }
    else if(buttonArr[2] === buttonArr[4] && buttonArr[4] === buttonArr[6] && buttonArr[2] !== ''){
        document.getElementById('2').style.backgroundColor = '#008000'
        document.getElementById('4').style.backgroundColor = '#008000'
        document.getElementById('6').style.backgroundColor = '#008000'
        return "winner is " + buttonArr[2];
    }
    else{
        return '';
    }
}






    
