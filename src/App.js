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
//Create function holdDice that takes id as a parameter
// Console.log(id)
// Pass that function to each instance of the Die component
// When it is clicked, it logs its own ID
// Update holdDice function to flip the isHeld based on the ip prop
// Update the rollDice function to not just roll all new dice, but to look through
// the existing dice to NOT role any that are being HELD
//
//

export default function App() {
  const [dice, setDice] = useState(allNewDice());

  function generateNewDie() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    };
  }

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDie());
    }
    return newDice;
  }

  function rollDice() {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.isHeld ? die : generateNewDie();
      })
    );
  }

  function holdDice(id) {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  }

  const diceElements = dice.map((die) => (
    <Die
      value={die.value}
      key={die.id}
      isHeld={die.isHeld}
      holdDice={() => holdDice(die.id)}
    />
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
