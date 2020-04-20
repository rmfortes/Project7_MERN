import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";

class Aside extends Component {
    
    render() {
        let buttons = this.props.data.map( (element, i) => {
        return (
            <div className="aside" key={i}>
                <Link to=
                {"/list/word/" + element.word}>
                <button>
                     {element.word}</button>
                </Link>
            </div>
        )}
        )
        return <div>{buttons}</div>
}};

export default Aside;