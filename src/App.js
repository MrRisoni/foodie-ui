import React from 'react';
import Basket from './Basket';
const masa = require('./data.json');

function App() {
  
  return (
    <main>
 
        <div class="row">
          <div class="col-2">
             Menu
            </div>

            <div class="col-8">

            <div class="alert alert-primary" role="alert">
  {masa.food.name}
</div> 

{masa.food.foodparts.map(fdPart => {
                return (
                  <div class="row">
                  <div class="col-8">
                    <div  key={fdPart.id} class="card">
                <div class="card-header">
                {fdPart.name}
                </div>
                <div class="card-body">
                  <blockquote class="blockquote mb-0">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                    <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                  </blockquote>
                </div>
                </div>
                </div>
              </div>
              )
            })}



            </div>


     
            <div class="col-2">
              <Basket/>
            </div>



        </div>
    </main>
  );
}

export default App;
