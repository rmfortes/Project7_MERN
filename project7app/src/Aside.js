import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import Body from "./Body.js";
import { BrowserRouter as Router } from "react-router-dom";

class Aside extends Component {
  render() {
    let buttons = this.props.data.map((element, i) => {
      return (
        <Router><div className="aside" key={i}>
          <Link to={"/list/word/" + element.word}>
            <button>{element.word}</button></Link>
            <Route
            path={"/list/word" + element.word}
            render={(routerProps) =>
            (<Body 
                {...routerProps}
                {...this.state}
               /> )}
                />
        </div>
        </Router>
      );
    });
    return <div>{buttons}</div>;
  }
}

export default Aside;
