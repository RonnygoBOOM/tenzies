import React from 'react';
import Die from '../components/DieComponent';

function Main() {
    const value = getRandomInt(6)
    function getRandomInt(max) {
        return (Math.floor(Math.random() * max))+1;
        }
        console.log()

    const [diceArray, setDiceArray] = React.useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])


    function allNewDice() {
        const newDice = []
        for (let i = 0; i <= 9; i++) {
            newDice.push(Math.ceil(Math.random() * 6))
        }
        return (
            newDice,
            setDiceArray(newDice)
        )
    }

    const diceElements = diceArray.map(die => <Die value={die} />)

    return (
        <>
        <div className="container">
            <div className="main">
                <div className="dice-container">
                    {diceElements}
                </div>
            <button className="roll" onClick={allNewDice}>Roll</button>
            </div>
        </div>
        </>
    )
}

export default Main;