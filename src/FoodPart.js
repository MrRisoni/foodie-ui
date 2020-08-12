import React from 'react';

function FoodPart(props) {
  return (
    <section>
        <div className="row">
                  <div className="col-8">
                    <div  key={props.id} className="card">
                <div className="card-header">
                {props.name}
                </div>
                <div className="card-body">
                  <blockquote className="blockquote mb-0">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                    <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                  </blockquote>
                </div>
                </div>
                </div>
              </div>
    </section>
  );
}

export default FoodPart;
