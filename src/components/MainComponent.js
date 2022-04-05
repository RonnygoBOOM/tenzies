import React, { useEffect } from 'react';
import Die from '../components/DieComponent';
import {nanoid} from 'nanoid';
import Confetti from 'react-confetti';

function Main() {
    const value = getRandomInt(6)
    function getRandomInt(max) {
        return (Math.floor(Math.random() * max))+1;
        }
        console.log()

    const [diceArray, setDiceArray] = React.useState(allNewDice())

    const [tenzies, setTenzies] = React.useState(false)
    

    useEffect(() => {
        const allHeld = diceArray.every(die => die.isHeld)
        const firstValue = diceArray[0].value
        const allMatch = diceArray.every(die => die.value === firstValue)
        allHeld && allMatch && setTenzies(true) 
        tenzies && console.log("You Win!")
    }, [diceArray])



    function generateNewDie() {
        return {
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid()
        }
    }

    function allNewDice() {
        const newDice = []
        for (let i = 0; i <= 9; i++) {
            newDice.push(generateNewDie())
        }
        return (
            newDice
        )
    }

    function rollDice() {
            setDiceArray(oldDice => oldDice.map(die => {
                return die.isHeld === false ? 
                generateNewDie()
                :
                die
            }
            ))
            if (tenzies === true) {
                setTenzies(false)
                setDiceArray(oldDice => oldDice.map(die => {
                    return generateNewDie()
                }
                ))
            }
    }

    function holdDice(id) {
        setDiceArray(oldDice => oldDice.map(die => {
            return die.id === id ? 
            {...die,
            isHeld: !die.isHeld} 
            :
            die
        }
        ))
    }


    const diceElements = diceArray.map(die => <Die key={die.id} isHeld={die.isHeld} value={die.value} holdDice = {() => holdDice(die.id)}/>)
    return (
        <>
        <div className="container">
            <div className="main">
            {tenzies && <Confetti />}
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
                <div className="dice-container">
                    {diceElements}
                </div>
            <button className="roll" onClick={rollDice}>{tenzies ? "New Game" : "Roll"}</button>
            </div>
        </div>
        </>
    )
}

export default Main;