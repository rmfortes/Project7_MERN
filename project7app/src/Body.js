import React, { Component } from 'react';

class Body extends Component {
    
    componentDidMount() {
        console.log('mounted')
    }
    
    render() {
        return (
            <div className="body">
                <h1>{this.props.word}</h1>
                <p>{this.props.rhymes}</p>
            </div>
        );
    }
}

export default Body;