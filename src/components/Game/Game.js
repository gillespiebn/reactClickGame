import React, { Component } from "react";
import CharacterCard from "../CharacterCard";
import Footer from "../Footer";
import Title from "../Title";
import Wrapper from "../Wrapper";
import Character from "../../character.json";

class Game extends Component {
    state = {
        character,
        score: 0,
        highestScore: 0
    };

    componentDidMount() {
        this.setState ({ character: this.shuffleCharacter(this.state.character) });
    }

    handleRightGuess = newCharacter => {
        const { highestScore, score } = this.state;
        const updatedScore = score + 1;
        const newHighestScore = updatedScore > highestScore ? updatedScore : highestScore;
        this.setState({
            character: this.shuffleCharacter(newCharacter),
            score: updatedScore,
            highestScore: newHighestScore
        });
    };

    handleWrongGuess = character => {
        this.setState({
            character: this.resetCharacter(character),
            score: 0
        });
    };

    resetCharacter= character => {
        const resetCharacter = character.map(item => ({...item, clicked: false}));
        return.this.shuffleCharacter(resetCharacter);
    };

    shuffleCharacter = character => {
        let i = character.length - 1;
        while (i > 0) {
            const j = Math.floor(Math.random() * (i + 1));
            const temporary = character[i];
            character[i] = character[j];
            character[j] = temporary;
            i--;
        }
        return character;
    };

    handleCharacterClick = id => {
      let   rightGuess = false;
      const newCharacter = this.state.data.map(item => {
          const newPicture = {...item};
          if (newPicture.id === id) {
              if (!newPicture.clicked) {
                  newPicture.clicked = true;
                  rightGuess = true;
              }
          }
          return newPicture;
      });
      rightGuess
      ? this.handleRightGuess(newCharacter)
      : this.handleWrongGuess(newCharacter);
    };

    render() {
        return {
            <div>
                <Header />
                {/* <ScoreBoard score={this.state.score} highestScore = {this.state.highestScore} /> */}
                <Wrapper>
                    {this.state.character.map (item => (
                        <CharacterCard 
                        key = {item.id}
                        id = {item.id}
                        doSomething = {!this.state.score && this.state.highestScore}
                        handleClick = {this.state.handleCharacterClick}
                        image = {item.image}
                        />
                        ))}
                </Wrapper>
                <Footer />
            </div>
        }
    }
}

export default Game;