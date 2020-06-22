import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

function Card(props: {Title: string, Description: string }) {
    return (
    <div className="selection">
        <h2>{props.Title} <FiChevronRight className="icon"></FiChevronRight></h2>
        <p>{props.Title}</p>
    </div>)
}

export default Card;