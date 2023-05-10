import React, { useContext } from "react";
import {Context} from "../../Context"

function Button(props) {
    const {updateScore, resetScores} = useContext(Context)

    const team = props.team
    const buttonText = props.text
    const buttonType = props.type

    function handleClick() {
        if(buttonType === 1)
            updateScore( team, 1 )
        else if(buttonType === 2)
            updateScore( team, 2 )
        else if(buttonType === 3)
            updateScore( team, 3 )
        if(buttonType === "RESET")
            resetScores()
    }

    return (
        <button className="scoreboard-button" onClick={handleClick}>{buttonText}</button>
    )
}

export default Button