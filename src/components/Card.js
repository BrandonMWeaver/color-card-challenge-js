import React from 'react';

const Card = props => {
    return (
        <div className="Card" style={{ backgroundColor: props.colorDatum.color }}>
            <h5>{props.colorDatum.color}</h5>
        </div>
    );
}

export default Card;
