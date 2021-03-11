import React from 'react';

const Card = (props) => {
    return (
            <div className="col-md-4" key={props.id}>
                <div className="card mb-4 box-shadow">
                    <img className="card-img-top" src={props.img} alt={props.pavadinimas} />
                    <div className="card-body">
                        <p className="card-text">{props.aprasymas}</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                                <button type="button" className="btn btn-sm btn-outline-secondary">{props.pavadinimas}</button>
                                <button type="button" className="btn btn-sm btn-outline-secondary">{props.kategorija}</button>
                            </div>
                            <small className="text-muted">{props.kaina}</small>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Card;