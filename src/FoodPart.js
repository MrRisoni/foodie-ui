import React from "react";

function FoodPart(props) {
  return (
    <section className="foodPart">
      <div className="row">
        <div className="col-8">
          <div key={props.id} className="card">
            <div className="card-header">{props.name}</div>
            <div className="card-body">
              {props.allowMany == 1 &&
                props.ingredients.map(ingr => {
                  return (
                    <p>
                      {" "}
                      <input
                        type="checkbox"
                        id="vehicle1"
                        name="vehicle1"
                        value="Bike"
                      />
                      {ingr.name} {ingr.price}
                    </p>
                  );
                })}

              {props.allowMany == 0 &&
                props.ingredients.map(ingr => {
                  return (
                    <p>
                      {" "}
                      <input
                        type="radio"
                        id="vehicle1"
                        name="vehicle1"
                        value="Bike"
                      />
                      {ingr.name} {ingr.price}
                    </p>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FoodPart;
