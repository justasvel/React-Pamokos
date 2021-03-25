import React, { useState, useEffect } from 'react';
import Search from './Search';
import Beer from './Beer';
import axios from 'axios';
import Loader from './Loader';
import Dropdown from './Dropdown';

const Home = () => {

    const [ characters, setBeers ] = useState([]);
    const [ loading, setLoading ] = useState(false);
    const [ query, setQuery ] = useState('');

    //For hops type
    const [hops, setHopsQuery] = useState('');

    useEffect( () => {

        const fetchBeers = async () => {
            const result = await axios(`https://api.punkapi.com/v2/beers?per_page=36${query}${hops}`);
            setBeers(result.data);
            setLoading(true);
        }

        fetchBeers();
    }, [query, hops]);

    const makeSearchTerm = (q) => {
        if (q === '') {
            setQuery('');
        } else {
            setQuery('&beer_name=' + q);
        }
    }


    return loading ? (
        <div className="row">
        <Search getQuery={(q) => makeSearchTerm(q)}/>
        <Dropdown getQuery={(q) => setHopsQuery('&hops=' + q)}/>
            {characters.map(({ id, name, image_url, tagline, description, food_pairing }) => {
                return <Beer name={name} img={image_url} tagline={tagline} desc={description} food={food_pairing} id={id} key={id}/>
            })}
        </div>
    ) : (<Loader />)
}

export default Home;