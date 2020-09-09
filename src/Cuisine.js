import React from "react";

function Cuisine(props) {
  return (
    <section>
      <div key={props.data.id} className="row">
        <div className="col-2"></div>
        <div class="card">
          <div class="card-body">{props.data.name}</div>
        </div>
      </div>
    </section>
  );
}

export default Cuisine;
