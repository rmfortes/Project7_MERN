import React, { Component } from "react";
import Header from "./Header.js";
import Body from "./Body.js";
import Aside from "./Aside.js";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //? what's my state?
    };
  }

  componentDidMount() {
    let URL =
      "https://cors-anywhere.herokuapp.com/rebeccas-rhymes-api.herokuapp.com/list/";
    fetch(URL, {})
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
  }

  render() {
    return (
      <div className="app">
        <Header />
        <div className="content">
          <Body />
          <Aside />
        </div>
      </div>
    );
  }
}

export default App;
