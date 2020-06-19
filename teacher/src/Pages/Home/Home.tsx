import React from 'react';
import './styles.css';
import { FiChevronRight } from 'react-icons/fi';

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
                    <h2>Title <FiChevronRight className="icon"></FiChevronRight></h2>
                    <p>Description Description Description Description Description Description </p>
                </div>
                <div className="selection">
                    <h2>Title <FiChevronRight className="icon"></FiChevronRight></h2>
                    <p>Description Description Description Description Description Description </p>
                </div>
                <div className="selection">
                    <h2>Title <FiChevronRight className="icon"></FiChevronRight></h2>
                    <p>Description Description Description Description Description Description </p>
                </div>
                <div className="selection">
                    <h2>Title <FiChevronRight className="icon"></FiChevronRight></h2>
                    <p>Description Description Description Description Description Description </p>
                </div>
                <div className="selection">
                    <h2>Title <FiChevronRight className="icon"></FiChevronRight></h2>
                    <p>Description Description Description Description Description Description </p>
                </div>
                <div className="selection">
                    <h2>Title <FiChevronRight className="icon"></FiChevronRight></h2>
                    <p>Description Description Description Description Description Description </p>
                </div>
                <div className="selection">
                    <h2>Title <FiChevronRight className="icon"></FiChevronRight></h2>
                    <p>Description Description Description Description Description Description </p>
                </div>
            </div>
            
        </div>
    )
}; 

export default Home;