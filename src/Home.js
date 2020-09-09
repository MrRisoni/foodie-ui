import React from "react";
import axios from "axios";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cuisines: [],
      favorites:[],
      fetched: false
    };
  }

  componentDidMount() {
    const self = this;
    console.log(process.env);

    axios
      .get(`${process.env.REACT_APP_API_ENDPOINT}/api/home`)
      .then(responseObj => {
        self.setState({
          cuisines: responseObj.data.cuisines,
          favorites: responseObj.data.favorites,
          restaurants: responseObj.data.restaurants,
          fetched: true
        });
      });
  }

  render() {
    if (this.state.fetched) {
      return (
        <section>
          <div className="row">
            <div className="col-2">
              {this.state.cuisines.map(cus => {
                return (
                  <div key={cus.id} className="row">
                    <div className="col-2">{cus.name}</div>
                  </div>
                );
              })}
            </div>

            <div className="col-8" id="restaurantsSection">

            {this.state.favorites.map(fav => {
                return (
                  <div key={fav.id} className="row">
                    <div className="col-8">{fav.name}</div>
                  </div>
                );
              })}


{this.state.restaurants.map(rest => {
                return (
                  <div key={rest.id} className="row">
                    <div className="col-8">{rest.name}</div>
                  </div>
                );
              })}


            </div>
          </div>
        </section>
      );
    } else {
      return <p> Wait ...</p>;
    }
  }
}

export default Home;
