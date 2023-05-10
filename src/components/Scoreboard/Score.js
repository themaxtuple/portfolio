import React from "react";
import Button from "./Button";
import Digits from "./Digits";

function Score(props) {
    const team = props.team

    return (
        <div className="score">
            <div className="title">{team}</div>
            <Digits team={team} />
            <div className="buttonGroup">
                <Button team={team} text="+1" type={1} />
                <Button team={team} text="+2" type={2} />
                <Button team={team} text="+3" type={3} />
            </div>
        </div>
    )
    
}

export default Score