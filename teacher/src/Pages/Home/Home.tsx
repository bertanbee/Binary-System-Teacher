import React from 'react';
import './styles.css';

import img from './img.png'

function Home() {
    return (
        <div className="div">
            <div className="img-content">
                <img src={img}></img>
            </div>
            
            <div className="selector">
                <h1>Computer Science</h1>
                <div className="selection">
                </div>
                <div className="selection">
                </div>
                <div className="selection">
                </div>
                <div className="selection">
                </div>
                <div className="selection">
                </div>
                <div className="selection">
                </div>
            </div>
            
        </div>
    )
}; 

export default Home;