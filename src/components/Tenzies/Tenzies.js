import React, { useState } from "react"
import { useEffect } from "react";
import { nanoid } from "nanoid";
import Die from "./Die";
import Confetti from "react-confetti";
import "./tenzies.css"

const Tenzies = () => {

    const createNewDie = () => {
        return {
            id: nanoid(),
            value: Math.ceil(Math.random() * 6),
            isHeld: false
        }
    }

    const createNewDice = () => {
        const newDice = [];

        for(let i=0; i<10; i++){
            newDice.push(createNewDie());
        }   

        return newDice;
    }

    const [dice, setDice] = useState(createNewDice());
    const [tenzies, setTenzies] = useState(false);
    const [rollCount, setRollCount] = useState(1);

    const holdDie = (id) => {
        setDice(dice.map(die =>
            die.id === id ? {...die, isHeld: !die.isHeld} : die
        ))
    }

    const rollDice = () => {
        setRollCount(prevCount => prevCount + 1)

        if(tenzies)
            newGame();
        else {
            setDice(dice.map(die => {
                if(die.isHeld)
                    return die
                else
                    return createNewDie();
            }))
        }
    }

    const diceList = dice.map(die => {
        return (
            <Die
                key={die.id}
                value={die.value}
                handleClick={() => holdDie(die.id)}
                isHeld={die.isHeld}
            />
        )
    })

    const newGame = () => {
        setDice(createNewDice());
        setRollCount(1);
        setTenzies(false);
    }

    useEffect(() => {
        const allDiceHeld = dice.every(die => die.isHeld);
        const allSameNumber = dice.every(die => dice[0].value == die.value)
        
        if(allDiceHeld && allSameNumber)
            setTenzies(true);

    }, [dice])

    const handleRefresh = () => {
        newGame();
    }

    return (
        <div className="tenzies-container">
            {tenzies && <Confetti />}
            <div className="refresh" onClick={handleRefresh} title="New Game">
                <svg id="refresh" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 118.04 122.88"><path fill="#002b36" d="M16.08,59.26A8,8,0,0,1,0,59.26a59,59,0,0,1,97.13-45V8a8,8,0,1,1,16.08,0V33.35a8,8,0,0,1-8,8L80.82,43.62a8,8,0,1,1-1.44-15.95l8-.73A43,43,0,0,0,16.08,59.26Zm22.77,19.6a8,8,0,0,1,1.44,16l-10.08.91A42.95,42.95,0,0,0,102,63.86a8,8,0,0,1,16.08,0A59,59,0,0,1,22.3,110v4.18a8,8,0,0,1-16.08,0V89.14h0a8,8,0,0,1,7.29-8l25.31-2.3Z"/></svg>
            </div>
            <div className="tenzies">
                <div className="diceGrid">
                    {diceList}
                </div>
                {tenzies && <h1 className="tenzies-title">You win!</h1>}
                <button onClick={rollDice}>{tenzies ? "New Game" : "Roll Dice"}</button>
            </div>
        </div>
    )
}

export default Tenzies;