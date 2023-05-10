import React, {useRef, useEffect, useContext} from 'react'
import {Context} from "../../Context"

function Digits(props) {
    const myElementRef = useRef(null)

    const {scores} = useContext(Context)
    const team = props.team

    useEffect ( () => {
        const digitsElement = myElementRef.current;
        updateScore(digitsElement, scores[team])
    }, [{scores}])

    const ledDisplay = [
        [1, 1, 1, 0, 1, 1, 1], // 0
        [0, 0, 1, 0, 0, 1, 0], // 1
        [1, 0, 1, 1, 1, 0, 1], // 2
        [1, 0, 1, 1, 0, 1, 1], // 3
        [0, 1, 1, 1, 0, 1, 0], // 4
        [1, 1, 0, 1, 0, 1, 1], // 5
        [1, 1, 0, 1, 1, 1, 1], // 6
        [1, 0, 1, 0, 0, 1, 0], // 7
        [1, 1, 1, 1, 1, 1, 1], // 8
        [1, 1, 1, 1, 0, 1, 1], // 9
    ];

    function getLedArrayForNumber(number) {
        const ledArray = ledDisplay[number];
        const newArray = Array.from(ledArray, (value) => value === 1);
        return newArray;
    }

    function updateScore(scoreElement, score) {
        const scoreString = score.toString().padStart(2, "0"); 
        const tensDigitLedArray = getLedArrayForNumber(scoreString[0]);
        const onesDigitLedArray = getLedArrayForNumber(scoreString[1]);

        const digitElements = scoreElement.querySelectorAll(".digit"); // select all digits for scoreElement (home or away)
        for (let i = 0; i < digitElements.length; i++) { // for the size of the number (in this case, 2)
            const digitLedArray = i === 0 ? tensDigitLedArray : onesDigitLedArray; // assign [false, false, true...] to tens or ones digit
            const segmentElements = digitElements[i].querySelectorAll(".segment"); // get all the segment elements for that digit (tens or ones)
            for (let j = 0; j < segmentElements.length; j++) { // for earch segement in that digit
                if (digitLedArray[j]) {
                    segmentElements[j].classList.remove("off"); // if true remove class .off (which means turn on - dark red)
                } else {
                    segmentElements[j].classList.add("off"); // else false so add class .off (which light red)
                }
            }
        }
    }

    return (
        <div className="digits" ref={myElementRef}>
            <div className="digit">
                <div className="segment top"></div>
                <div className="segment top-left"></div>
                <div className="segment top-right"></div>
                <div className="segment middle"></div>
                <div className="segment bottom-left"></div>
                <div className="segment bottom-right"></div>
                <div className="segment bottom"></div>
            </div>
            <div className="digit">
                <div className="segment top"></div>
                <div className="segment top-left"></div>
                <div className="segment top-right"></div>
                <div className="segment middle"></div>
                <div className="segment bottom-left"></div>
                <div className="segment bottom-right"></div>
                <div className="segment bottom"></div>
            </div>
        </div>
    )
}

export default Digits