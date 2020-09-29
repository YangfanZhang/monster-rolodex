import React from 'react';
import "./card.styles.css";

export const Card = props => (
<div className={'card-container'}>
    <img alt="mosnter" src={`http://robohash.org/${props.monster.id}?set=set2&size=180x180`}/>
    <h1> {props.monster.name}</h1>
</div>
);

export default Card;
