import React, { useState } from "react";

const Score = (props) => {
    
    const [currentScore, setCurrentScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);

    
    return (
        <div>
            <p>Current Score: {currentScore}</p>
            <p>Best Score: {bestScore}</p>
    </div>
)



}

//get score from valid clicks
//best score is updated when current score becomes bigger than best score
//shot divs with scores
//how does current score change?