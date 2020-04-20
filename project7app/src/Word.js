import React, { Component } from 'react';

class Word extends Component {
    render() {
        console.log(this.props.word)
        return (
            <div>
                {this.props.word}
            </div>
        );
    }
}

export default Word;