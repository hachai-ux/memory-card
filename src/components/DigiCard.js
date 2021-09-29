import React from "react";

const DigiCard = (props) => {
    return (
        <div className={"card"} onClick={() => props.handleClick(props.id)}>
            <div className="img-container">
                <img alt={props.name} src={props.image} />
            </div>
            <div className="img-content">
                <ul>
                    <li>
                        <strong>{props.name}</strong>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default DigiCard;