import React, { useState, useEffect } from 'react';
import Beer from './Beer';
import axios from 'axios';
import Loader from './Loader';

const Home = () => {

    const [ characters, setBeers ] = useState([]);
    const [ loading, setLoading ] = useState(false);

    useEffect( () => {

        const fetchBeers = async () => {
            const result = await axios('https://api.punkapi.com/v2/beers');
            setBeers(result.data);;
            setLoading(true);
        }

        fetchBeers();
    }, []);

    return loading ? (
        <div className="row">
            {characters.map(({ id, name, image_url, tagline, description, food_pairing }) => {
                return <Beer name={name} img={image_url} tagline={tagline} desc={description} food={food_pairing} id={id} key={id}/>
            })}
        </div>
    ) : (<Loader />)
}

export default Home;