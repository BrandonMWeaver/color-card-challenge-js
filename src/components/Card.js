import React from 'react';

import '../styles/Card.css';

const Card = props => {
    return (
        <div className="Card" style={{ backgroundColor: props.colorDatum.color }}>
            <h5>{props.colorDatum.color}</h5>
        </div>
    );
}

export default Card;
