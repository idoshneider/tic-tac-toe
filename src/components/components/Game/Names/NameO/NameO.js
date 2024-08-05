import React from "react";
import "../NameO/NameO.css"
// import "../Names/Names.css"
const NameO = (props) => {
  return (
      <div className="nameO">
      <input
        onChange={props.onSetNameOChange}
        onKeyPress={(event) => props.OnSetNamesPress(event,props.stateNameX,props.stateNameO)}
        className="searchbar"
        type="text"
        placeholder="Player O(Insert Name)"
      />
      </div>
  );
};

export default NameO;
