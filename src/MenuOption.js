import React from "react";

function MenuOption(props) {
  return (
    <div className="row cusinneDiv">
      <div className="col-10">
        <div class="karta">{props.data.name}</div>
      </div>
    </div>
  );
}

export default MenuOption;
