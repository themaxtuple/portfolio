import React from 'react'
import Button from './Button'
import Score from './Score'
import "./scoreboard.css"

function Scoreboard() {

    return (
        <div className="scoreBoard">
            <div className="scores">
                <Score team="home" />
                <Score team="away" />
            </div>
            <div className='reset'>
                <Button type="RESET" text="RESET" />
            </div>
        </div>
    )
}

export default Scoreboard