import React from 'react';

function Restaurant(props) {
    return (
           <div  className="row restaurantDiv">
                    <div className="col-8">
           <div class="kartaRestau">

   <diiv className="row"> 
   <div className="col-5 offset-2">
    {props.data.name}
    </div>

    <div className="col-2">

    <button type="button" class="btn btn-warning btn-sm">Order!</button>
    </div>
    </diiv>

  
  </div>
</div>
</div>
    )
}


export default Restaurant;