import React, { Component } from "react";
import Header from "./Header.js";
import Body from "./Body.js";
import Aside from "./Aside.js";
import "./App.css";
import { Route, Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      words: "",
      rhymes: [],
      data: [],
      aside: ""
    };

    this.newWord = this.newWord.bind(this);
  }

  newWord() {
    let URL =
      "https://cors-anywhere.herokuapp.com/https://rebeccas-rhymes-api.herokuapp.com/list/";
    fetch(URL)
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          data: res,
        })
      );
    console.log(this.state.data);
    // res.map(element =>
    //     console.log(element),
    // this.setState({
    //     words: res[i].word,
    //     rhymes: res[i].rhymes,
    //   }););

    //   });
  }

  componentDidMount() {
    this.newWord();
  }

  render() {
    console.log(this.state.data);
    //   this.state.data.map(element => console.log(element))
    return (
      <Router>
        <div className="app">
          {/* <Link to="/">Side Buttons</Link> */}
          <Header />
          <div className="content">
            <Route
              path="/"
              render={(routerProps) => (
                <Aside
                  {...routerProps}
                  {...this.state}
                />
              )}
            //   component={Aside}
            //   word={this.state.data.word}
            />
            <Route
            path="/list/word/:word"
            render={(routerProps) =>
            (
            <Body 
            {...routerProps}
            {...this.state}/>
            )}
            />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
