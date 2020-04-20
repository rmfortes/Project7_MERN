import React, { Component } from "react";

class Body extends Component {
  constructor(props) {
    super(props);

    this.state = {
      display: "",
    };

  }

  componentDidMount() {
    let URL =
      "https://cors-anywhere.herokuapp.com/https://rebeccas-rhymes-api.herokuapp.com/list/word/cup";
    fetch(URL)
      .then((res) => res.json())
      .then(
        (res) => {
          this.setState({
            display: res,
          }),
        console.log(this.state.display[0])
        });
  }

//   componentDidMount() {
//     this.grabWord();
//     console.log("component has mounted");
//   }

  render() {
    return (
      <div className="body">
        {/* <h1>{this.state.display.word}</h1> */}
        {/* <p>{this.state.display}</p> */}
      </div>
    );
  }
}

export default Body;
