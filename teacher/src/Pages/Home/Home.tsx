import React from 'react';
import './styles.css';

import Card from '../../Components/Card';

import img from './img.png'

function Home() {
    return (
        <div className="div">
            <div className="img-content">
                <img src={img} alt="img"></img>
            </div>
            
            <div className="selector">
                <h1>Computer Science</h1>

                <Card className="selection" Title="HEY" Description="HJAFJAEWOFAJSD"></Card>
            </div>
            
        </div>
    )
}; 

export default Home;