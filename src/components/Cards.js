import React, { useState } from "react";
import beelzemonCards from "../beelzemonCards.json";

//Cards is the "game" module of our app

const Cards = () => {
 
const [cards, setCards] = useState(beelzemonCards);
const [bestScore, setBestScore] = useState(0);
const [currentScore, setCurrentScore] = useState(0);
const [clicked, setClicked] = useState(false);
const [shuffledArr, setShuffledArr] = useState([]);
    
    const handleClick = (id) => {
        shuffleArray();
        handleScore(id);
    }

    const handleScore = id => {
        cards.forEach(card => {
            if (id === card.id && card.clicked === false){
                setCards(card.clicked = true);
                setClicked(false);
                handleIncrement();
            }
            else if (id === card.id && card.clicked === true) {
                if (currentScore > bestScore) {
                    setBestScore(currentScore);
                }
                setCurrentScore(0);
                setClicked(true);
                cards.forEach(card => (setCards(card.clicked = false)));
            }
        
        })
    }

    const shuffleArray = () => {
        //Shuffle array of objects
        const shuffledArray = shuffle(cards);
        //Setting 'shuffledArr' as the new state
        setShuffledArr(shuffledArray);
        
    }

    const shuffle = (array) => {
        let currentIndex = array.length;
        let temporaryValue;
        let randomIndex;

        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            //swap cards
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

    }

    const handleIncrement = () => {
        setCurrentScore(currentScore + 1);
    }


    
    const cardCollection = cards.map((card) => {
        return <DigiCard
            Clicked={clicked}
            handleClick={handleClick}
            id={id}
            key={id}
            name={card.name}
            image={card.image}
        />
    });

return(
    <div className="Cards">
        <Score />
        {cardCollection}
    </div>
    
);

}