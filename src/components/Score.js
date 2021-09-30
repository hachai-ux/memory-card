import React from "react";

const Score = (props) => {
    
    
    return (
        <div>
            <p>Current Score: {props.currentScore}</p>
            <p>Best Score: {props.bestScore}</p>
    </div>
)



}

//get score from valid clicks
//best score is updated when current score becomes bigger than best score
//shot divs with scores
//how does current score change?

export default Score;