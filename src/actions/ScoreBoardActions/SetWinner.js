const SetWinner = (symbol) => {
  return {
    type: `winner is ${symbol}`,
  };
};
export default SetWinner;
