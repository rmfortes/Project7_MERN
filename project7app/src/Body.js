import React, { Component } from "react";
class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "roger",
      allRhymes: []
    };
   
  }
  componentDidMount() {
    let URL =
      `https://cors-anywhere.herokuapp.com/https://rebeccas-rhymes-api.herokuapp.com/list/word/${this.props.match.params.word}`;
    fetch(URL)
      .then((res) => res.json())
      .then(
        (res) => {
          console.log(res)
          this.setState({
            display: res,
            allRhymes: res[0].rhymes.all
          })
          // console.log(this.state.display[0].rhymes.all)
        });
  }
  //   componentDidMount() {
    //   this.grabWord();
  //     console.log("component has mounted");
  //   }
  render() {
    // console.log(this.state.display[0].rhymes.all)
    let { allRhymes, display } = this.state
    let list = allRhymes.map((word, i) => {
      return <p key={i}>{word}</p>
    })
    // console.log(this.state.display)
    return (
      <div className="body">
        {list}
        {/* <h1>{this.state.display.word}</h1> */}
        {/* <p>{this.state.display}</p> */}
      </div>
    );
  }
}
export default Body;