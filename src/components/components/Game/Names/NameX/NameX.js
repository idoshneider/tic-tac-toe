import React from "react";
import "../NameX/NameX.css";
// import "../Names/Names.css"
const Createinput = (props) => {
  return (
    <div className="nameX">
      <input
        onChange={props.onSetNameXChange}
        onKeyPress={(event) => props.handleClearTableClick(event)}
        className="searchbar"
        type="string"
        placeholder="Player X(Insert Name)"
      />
    </div>
  );
};

export default Createinput;
