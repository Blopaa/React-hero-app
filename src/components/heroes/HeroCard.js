import React from "react";
import { Link } from "react-router-dom";

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
}) => {
    return (
        <div className="card ms-3" style={{maxWidth: '540px'}}>
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img loading="lazy" src={`./assets/heroes/${id}.jpg`} title={superhero} alt={superhero} className="card-img"/>
                </div>
                <div className="col-md-8">
                    <div className="card-body" style={{padding: '0px 20px 0px 20px'}}>
                    <h5 className="card-title">{superhero}</h5>
                    <p className="card-text">
                        {alter_ego}
                    </p>
                    {/* {
                        (alter_ego !== characters)
                        && <p className="card-text">{characters}</p>
                    } */}
                    <p className="card-text text-muted">
                        <small className="">{first_appearance}</small>
                    </p >
                    <Link to={`./hero/${id}`} >Más...</Link>
                    </div>
                </div>
            </div>
        </div>
        );
};
