import React, { useState, useEffect } from 'react';
import Character from './Character';
import axios from 'axios';

const Home = () => {

    const [ characters, setCharacters ] = useState([]);

    useEffect( () => {

        const fetchCharacters = async () => {

            const result = await axios('https://api.punkapi.com/v2/beers');
            setCharacters(result.data);
            console.log(result.data);
        }

        fetchCharacters();
    }, []);

    return (
        <div className="row">
            {characters.map(({ char_id, name, nickname }) => <Character characterName={name} nickname={nickname} key={char_id}/>)}
        </div>
    )
}

export default Home;