import React, { Component } from "react";
import Card from "./Card";
import data from "../data.json";

export default class Home extends Component {

  render() {
    return (
      <div>
        <div className="container text-center my-5">
          <h3>Home Page</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            exercitationem recusandae voluptatum quas consectetur ex incidunt
            voluptatem omnis, et est at iusto doloremque voluptatibus minima
            molestias expedita debitis, nesciunt consequuntur!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            voluptatibus rerum tempora aliquam enim, error soluta, mollitia
            ipsam sed esse repellat, eaque nobis ducimus ratione modi
            exercitationem deserunt voluptates est libero earum labore! Harum
            suscipit earum aliquam quasi, fugit unde debitis culpa, amet
            inventore exercitationem corrupti. Neque vitae quis ipsa.
          </p>
          <div className="row my-5">
            {data.map(({ pavadinimas, aprasymas, kaina, kategorija, img }) => {
              return (
                <Card
                  pavadinimas={pavadinimas}
                  aprasymas={aprasymas}
                  kaina={kaina}
                  kategorija={kategorija}
                  img={img}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
