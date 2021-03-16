import React from "react";
import { Link } from 'react-router-dom';

export default function Beer(props) {
  return (
    <div className="card col-lg-4 col-xs-12 m-auto my-5 py-3">
      <div className="image-card mx-auto">
        <img className="card-img-top" alt="..." src={props.img} />
      </div>
      <div className="card-body d-flex flex-column">
        <div className="mt-auto">
          <h4 className="card-title">{props.name}</h4>
          <p className="fst-italic">
            <span className="">{props.tagline}</span>
          </p>
          <Link to={`${props.id}`}><button className="button-primary">Learn More</button></Link>
        </div>
      </div>
    </div>
  );
}