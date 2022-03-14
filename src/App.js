import React from "react";
import "./App.css";
import Die from "./Die";

// Write a function that returns an array of 10 random numbers between 1-6 inclusive.
// Log the array of numbers to the console for now.

export default function App() {
  function allNewDice() {
    // new array to hold numbers
    // loop 10 times
    // push a random number from 1-6 to my array
    // return array
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(Math.ceil(Math.random() * 6));
    }
    return newDice;
  }
  console.log(allNewDice());

  return (
    <main>
      <div className="dice-container">
        <Die value="1" />
        <Die value="2" />
        <Die value="3" />
        <Die value="4" />
        <Die value="5" />
        <Die value="6" />
        <Die value="1" />
        <Die value="2" />
        <Die value="3" />
        <Die value="4" />
      </div>
    </main>
  );
}
