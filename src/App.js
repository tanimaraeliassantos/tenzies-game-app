import React, { useState } from "react";
import "./App.css";
import Die from "./Die";
import { nanoid } from "nanoid";

// Write a function that returns an array of 10 random numbers between 1-6 inclusive.
// Log the array of numbers to the console for now.
// Create state to hold array of numbers
// Map over the state to generate array of Die and render those in place of the manually written elements
// Create a Roll Dice button that will re-roll all 10 dice
// Clicking the button should generate an array of numbers and set the dice state to that new array
// Re-rendering the array to the page
// Update array of numbers in state to be an array of objects instead
// Each object should look like: {value:<random number>, isHeld: false}
// Update diceElements to make code work properly after
// Add conditional styling to the Die component
// If it's held, its background color changes to light green
// Remember to let the Die component know if it's being held or not
//

export default function App() {
  const [dice, setDice] = useState(allNewDice());

  // new array to hold numbers
  // loop 10 times
  // push a random number from 1-6 to my array
  // return array

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push({
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid(),
      });
    }

    return newDice;
  }

  function rollDice() {
    setDice(allNewDice());
  }

  const diceElements = dice.map((die) => (
    <Die value={die.value} key={die.id} isHeld={die.isHeld} />
  ));

  return (
    <main>
      <div className="dice-container">{diceElements}</div>
      <button className="roll-button" onClick={rollDice}>
        Roll
      </button>
    </main>
  );
}
