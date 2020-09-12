import React from 'react';

import Card from '../components/Card';

import '../styles/CardsContainer.css';

const CardsContainer = props => {
    return (
        <div className="CardsContainer">
        {props.colorData.map((colorDatum, index) => {
            return (
                <Card key={index} colorDatum={colorDatum} />
            );
        })}
        </div>
    );
}

export default CardsContainer;
