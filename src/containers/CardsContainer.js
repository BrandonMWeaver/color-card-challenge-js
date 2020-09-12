import React from 'react';

import Card from '../components/Card';

const CardsContainer = props => {
    return (
        <div className="CardsContainer">
        {props.colors.map((color, index) => {
            return (
                <Card key={index} color={color} />
            );
        })}
        </div>
    );
}

export default CardsContainer;
