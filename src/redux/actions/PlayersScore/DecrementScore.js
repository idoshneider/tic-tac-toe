const DecrementScore = (symbol) => {
    return {
      type: "decrement",
      decSym: symbol,
    };
  };
  export default DecrementScore;
  