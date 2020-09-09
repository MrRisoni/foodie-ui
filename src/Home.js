import React from "react";
import axios from "axios";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cusines: [],
      fetched: false
    };
  }

  componentDidMount() {
    const self = this;
    console.log(process.env);

    axios
      .get(`${process.env.REACT_APP_API_ENDPOINT}/api/browse`)
      .then(responseObj => {
        self.setState({
          cusines: responseObj.data.cusines,
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
              {this.state.cusines.map(cus => {
                return (
                  <div key={cus.id} className="row">
                    <div className="col-2">{cus.name}</div>
                  </div>
                );
              })}
            </div>

            <div className="col-8"></div>
          </div>
        </section>
      );
    } else {
      return <p> Wait ...</p>;
    }
  }
}

export default Home;
