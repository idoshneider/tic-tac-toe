import React from "react";
import "../NameX/NameX.css";
// import "../Names/Names.css"
const NameX = (props) => {
  return (
    <div className="nameX">
      <input
        onChange={props.onSetNameXChange}
        onKeyPress={(event) => props.OnSetNamesPress(event,props.stateNameX,props.stateNameO)}
        className="searchbar"
        type="text"
        placeholder="Player X(Insert Name)"
      />
    </div>
  );
};

export default NameX;
