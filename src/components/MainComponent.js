import React from 'react';
import Die from '../components/DieComponent';

function Main() {
    const value = getRandomInt(6)
    function getRandomInt(max) {
        return (Math.floor(Math.random() * max))+1;
        }
        console.log()
    return (
        <>
        <div className="container">
            <div className="main">
                <div className="dice-container">
                    <Die value={value}/>
                    <Die value={value}/>
                    <Die value={value}/>
                    <Die value={value}/>
                    <Die value={value}/>
                    <Die value={value}/>
                    <Die value={value}/>
                    <Die value={value}/>
                    <Die value={value}/>
                    <Die value={value}/>
                </div>

            </div>
        </div>
        </>
    )
}

export default Main;