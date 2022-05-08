export const IsWin = (buttonArr,size) => {
    let flag;
    let prev = buttonArr[0]; //rows
    ///////
    for (let i = 0; i < size; i++) {
      flag = true;
      for (var j = i * size; j < i*size+size;j++) {
            if(prev !== buttonArr[j] || prev === ''){
              flag = false;
              
            }
            prev = buttonArr[j];
        }
        
        if(flag){
          return true
          
        }
        prev = buttonArr[j+1];
        
      } 
      ////////
      prev = buttonArr[0]; //columns
      for (let i = 0; i < size; i++) {
        flag = true;
        for (var j = i; j <= size*(size-1) + i;j+=size) {
              if(prev !== buttonArr[j] || prev === ''){
                flag = false;
                
              }
              prev = buttonArr[j];
          }
          
          if(flag){
            return true
            
          }
          prev = buttonArr[i+1];
          
        }
        //////////
      prev = buttonArr[0];
      flag = true;
      for(let i =0; i<buttonArr.length;i+=size+1){
        if(prev !== buttonArr[i] || prev === ''){
          flag = false;
        }
        prev = buttonArr[i];
      }
      if(flag){
        return true
      }
      /////////
      prev = buttonArr[size-1];
      flag = true;
      for(let i =size-1; i <= buttonArr.length-size; i+=size-1){
        if(prev !== buttonArr[i] || prev === ''){
          flag = false;
        }
        prev = buttonArr[i];
      }
      if(flag){
        return true
      }

      return false;

    }