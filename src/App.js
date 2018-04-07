import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import character from "./character.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    character,
    // score = 0,
    // highScore = 0
  };

// characterClicked = props.character.filter(character => onclick)

handleIncrement = () => {
  this.setState({ count: this.state.count + 1 });
};

// shuffleArray = () => {
//   let i = this.state.length - 1;
//   for (; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     const temp = this.state[i];
//     this.state[i] = this.state[j];
//     this.state[j] = temp;
//   }
//   return this.state
// };
  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <div className="header">
          <Title><img className="falloutFont" src="https://fontmeme.com/permalink/180406/082e6eb7213a824adabc0e5950312eb5.png" alt="" /></Title>
          <br />
          {/* <h3>Score: {props.score} || High Score: {props.highScore}</h3> */}
      </div>
        <div className="container">
          {this.state.character.map(character => (
            <CharacterCard
              key={character.id}
              id={character.id}
              image={character.image}
            />
          ))}

        </div>
      </Wrapper>
    );
  }

  clickCC = id => {
    this.state.character.forEach((character) => {
      if (character.id === id) {
        // {props.count.handleIncrement}
      } else {

      }
    })

  }
}


export default App;