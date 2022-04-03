import React from 'react';
import Die from '../components/DieComponent';
import {nanoid} from 'nanoid';

function Main() {
    const value = getRandomInt(6)
    function getRandomInt(max) {
        return (Math.floor(Math.random() * max))+1;
        }
        console.log()

    const [diceArray, setDiceArray] = React.useState(allNewDice())

    function rollDice() {
        setDiceArray(allNewDice())
    }

    function allNewDice() {
        const newDice = []
        for (let i = 0; i <= 9; i++) {
            newDice.push(
                {
                value: Math.ceil(Math.random() * 6),
                isHeld: false,
                id: nanoid()
            }
                )
        }
        return (
            newDice
        )
    }

    function handleHoldValue() {

    }

    const diceElements = diceArray.map(die => <Die key={die.id} isHeld={die.isHeld} value={die.value} handleHoldValue = {handleHoldValue}/>)

    return (
        <>
        <div className="container">
            <div className="main">
                <div className="dice-container">
                    {diceElements}
                </div>
            <button className="roll" onClick={rollDice}>Roll</button>
            </div>
        </div>
        </>
    )
}

export default Main;