import React from "react";
import "../NameO/NameO.css";
// import "../Names/Names.css"
const Createinput = (props) => {
  return (
    <div className="nameO">
      <input
        onChange={props.onSetNameOChange}
        onKeyPress={(event) => props.handleClearTableClick(event)}
        className="searchbar"
        type="string"
        placeholder="Player O(Insert Name)"
      />
    </div>
  );
};

export default Createinput;
