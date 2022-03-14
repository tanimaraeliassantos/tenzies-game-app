import React, { useState } from "react";
import "./App.css";
import Die from "./Die";

// Write a function that returns an array of 10 random numbers between 1-6 inclusive.
// Log the array of numbers to the console for now.
// Create state to hold array of numbers
// Map over the state to generate array of Die and render those in place of the manually written elements
// Create a Roll Dice button that will re-roll all 10 dice
// Clicking the button should generate an array of numbers and set the dice state to that new array
// Re-rendering the array to the page

export default function App() {
  const [dice, setDice] = useState(allNewDice());

  // new array to hold numbers
  // loop 10 times
  // push a random number from 1-6 to my array
  // return array

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(Math.ceil(Math.random() * 6));
    }
    return newDice;
  }

  function rollDice() {
    setDice(allNewDice());
  }

  const diceElements = dice.map((die) => <Die value={die} />);

  return (
    <main>
      <div className="dice-container">{diceElements}</div>
      <button className="roll-button" onClick={rollDice}>Roll</button>
    </main>
  );
}
