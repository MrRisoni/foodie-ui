import React from "react";
import axios from "axios";
import MenuOption from "./MenuOption";
import Basket from "./Basket";

class Order extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: [],
      fetched: false
    };
  }

  componentDidMount() {
    const self = this;
    console.log(process.env);

    axios
      .get(`${process.env.REACT_APP_API_ENDPOINT}/api/menu`)
      .then(responseObj => {
        self.setState({
          menu: responseObj.data,
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
              {this.state.menu.map(mn => {
                return <MenuOption data={mn} />;
              })}
            </div>

            <div className="col-8">Hey !!!!</div>

            <div className="col-2">
              <Basket />
            </div>
          </div>
        </section>
      );
    } else {
      return <p>Please wait....</p>;
    }
  }
}

export default Order;
