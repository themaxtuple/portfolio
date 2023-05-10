import React, {useState} from "react"

const Context = React.createContext()

function ContextProvider({children}) {
    const [scores, setScores] = useState({home: 0, away: 0})

    function updateScore(team, scoreToAdd) {
        const maxScore = 99

        if(scores[team] + scoreToAdd > maxScore){
            setScores(prevScores => ({
                ...prevScores,
                [team]: maxScore
            }))
        } else {
            setScores(prevScores => ({
                ...prevScores,
                [team]: prevScores[team] + scoreToAdd
            }))
        }
    }
    
    function resetScores() {
        setScores({home: 0, away: 0})    
    }
    
    return (
        <Context.Provider value={{
            scores,
            updateScore,
            resetScores
        }}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}