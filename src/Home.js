import React from "react";
import axios from "axios";
import Cuisine from "./Cuisine";
import Restaurant from "./Restaurant";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cuisines: [],
      favorites: [],
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
                  return <Cuisine data={cus} />;
                })}
            </div>

            <div className="col-8" id="restaurantsSection">
              {this.state.favorites.map(fav => {
                return <Restaurant data={fav} />;
              })}

              {this.state.restaurants.map(rest => {
                return <Restaurant data={rest} />;
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
