import React from "react";
import "./ScoreBoard.css";

const ScoreBoard = props => (
    <nav className="scoreBoard">
        Score: {props.score} || Highest Score: {props.highestScore}
    </nav>
)