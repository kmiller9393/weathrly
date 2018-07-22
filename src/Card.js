import React from 'react';

export default function Card(props) {
    return (
      <div>
        <p>{props.month}</p>
        <p>{props.day}</p>
        <p>{props.hour}</p>
        <p>{props.temp}</p>
        <img src={props.icon} />
        <p>{props.high}</p>
        <p>{props.low}</p>
      </div>
    );
}
