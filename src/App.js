import React from 'react';
import Basket from './Basket';
import FoodPart from './FoodPart';
const masa = require('./data.json');

function App() {
  
  return (
    <main>
 
        <div className="row">
          <div className="col-2">
             Menu
            </div>

            <div className="col-8">

            <div className="alert alert-primary" role="alert">
  {masa.food.name}
</div> 

{masa.food.foodparts.map(fdPart => {
                return (
                 <FoodPart key={fdPart.id} name={fdPart.name} id={fdPart.id}/>
              )
            })}
            </div>
    
            <div className="col-2">
              <Basket/>
            </div>

        </div>
    </main>
  );
}

export default App;
