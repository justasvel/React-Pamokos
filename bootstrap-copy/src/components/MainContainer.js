import React from 'react';
import Card from './Card';
import data from '../data.json';

const MainContainer = () => {
    return (
        <section class="jumbotron text-center">
            <div class="container">
                <div class="row">
                    {data.map(({ pavadinimas, kategorija, aprasymas, kaina, img }) => {
                        return <Card pavadinimas={pavadinimas} kategorija={kategorija} aprasymas={aprasymas} kaina={kaina} img={img}/>
                    })}
                </div>
            </div>
        </section>
    );
}

export default MainContainer;