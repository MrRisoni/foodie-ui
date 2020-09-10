import React from "react";

function Cuisine(props) {
  return (
    <div className="row cusineDiv">
      <div className="col-10">
        <div class="karta">
          <input type="checkbox" id="vehicle1" name="vehicle1" />

          {props.data.name}
        </div>
      </div>
    </div>
  );
}

export default Cuisine;
