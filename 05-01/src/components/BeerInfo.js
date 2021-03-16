import React from 'react';
import { useState, useEffect } from 'react';
import Loader from './Loader';
import axios from 'axios';

export default function BeerInfo({ match }) {

    const [beerItem, setBeer] = useState([]);
    const [ loading, setLoading ] = useState(false);
    // const [foodItems, setFood] = useState([]);

    useEffect( () => {
        fetchBeer();
    }, []);

    const fetchBeer = async () => {
        const result = await axios(`https://api.punkapi.com/v2/beers/${match.params.id}`);

        console.log(...result.data);
        setBeer(...result.data);
        setLoading(true);
    }


    return loading ? (
        <div className="beer-info my-5">
            <h2 className="mb-5">{beerItem.name}</h2>
            <div className="image-container mb-5">
                <img src={beerItem.image_url} alt=""/>
            </div>
            <div className="description mb-5">
                <h4>Description</h4>
                <p>{beerItem.description}</p>
            </div>
            <div className="goes-well">
                <h4>Goes Well With</h4>
                <ul className="food-list">
                   
                </ul>
            </div>
        </div>
    ) : (<Loader />)
}
