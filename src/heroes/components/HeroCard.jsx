import React from 'react';
import { Link } from 'react-router-dom';

//Podemos crear un componente, sin exportarlo, solo para usarlo en este componente
//Este componente lo vamos a usar para evaluar si el alter_ego es igual al actor

const CharactersByHero = ({alter_ego, characters}) => {
  // if (alter_ego === characters) return (<></>);
  // return <p>{characters}</p>

  return (alter_ego === characters) 
    ? (<></>)
    : <p>{characters}</p> 
}


export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters
}) => {
  
  const heroImgUrl = `/assets/heroes/${id}.jpg`;

  return (
    <div className="col animate__animated animate__fadeIn">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-4">
            <img src={heroImgUrl} alt={superhero} className="card-img" />
          </div>
          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">{superhero}</h5>
              <p className="card-text">{alter_ego}</p>
              {/* {
                (alter_ego !== characters) && <p>{characters}</p>
              } */}
              <CharactersByHero alter_ego={alter_ego} characters={characters}/>
              <p className="card-text">
                <small className="text-muted">{first_appearance}</small>
              </p>
              <Link to={`/hero/${id}`}>
                Mas Información
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
