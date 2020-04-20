import React, { Component } from 'react';

class Rhymes extends Component {
    render() {
    
        return (
            <div>
                {[this.props.rhymes]}
            </div>
        );
    }
}

export default Rhymes;