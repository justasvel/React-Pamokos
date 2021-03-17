import React from 'react'
import beer from './img/beer.jpg';

export default function About() {
    return (
        <div>
            <h1 className="my-5">This is About page</h1>
            <h3 className="my-5">If you can read the text below you are all set.</h3>
            <div className="about-img-container">
                <img className="about-img" src={beer} alt="test for eyes" />
            </div>
        </div>
    )
}
