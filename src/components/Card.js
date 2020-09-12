import React from 'react';

const Card = props => {
    return (
        <div className="Card" style={{ backgroundColor: props.color }}>
            <h5>{props.color}</h5>
        </div>
    );
}

export default Card;
