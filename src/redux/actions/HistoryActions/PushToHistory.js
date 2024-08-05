const PushToHistory = (symbol,index) => {
  return {
    type: symbol,
    index: index,
  };
};
export default PushToHistory;
