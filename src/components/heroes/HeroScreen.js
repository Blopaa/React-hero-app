import React, { useMemo } from "react";
import { useParams, Redirect } from "react-router-dom";
import { GetHeroByID } from "../../selectors/GetHeroByID";

export const HeroScreen = ({history}) => {
    const { heroeId } = useParams();
    useMemo(() => GetHeroByID(heroeId), [heroeId])
    const hero = GetHeroByID(heroeId);

    if (!hero) {
        return <Redirect to="/" />;
    }
    //   console.log(hero);
    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters,
    } = hero;

    const handleClick = () => {
        if(history.lenght <= 2){
            history.push('/')
        }
        history.goBack()
    }

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img
                    src={`../assets/heroes/${heroeId}.jpg`}
                    alt="img"
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                />
            </div>
            <div className="col-8">
                <h3>{superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <b>Alter ego: </b>
                        {alter_ego}
                    </li>
                    <li className="list-group-item">
                        <b>publisher: </b>
                        {publisher}
                    </li>
                    <li className="list-group-item">
                        <b>first appareance: </b>
                        {first_appearance}
                    </li>
                </ul>
                <h5> Characters </h5>
                <p>{characters}</p>
                <button className="btn btn-outline-info" onClick={handleClick}>
                    Return
                </button>
            </div>
        </div>
    );
};
