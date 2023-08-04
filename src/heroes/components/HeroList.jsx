import { useMemo } from "react";
import { getHeroesByPublisher } from "../helpers";
import { HeroCard } from "./";


export const HeroList = ({publisher}) => {

  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);//El useMemo dispara un callback que va a ser la fcn que queremos llamar

  return (
    //Hacer el map para mostrar cada uno de los elementos, con el key y toda la bola y cargar el componente en DcPage y MarvelPage
    <div className="row rows-cols-1 row-cols-md-3 g-3">
      {
        heroes.map(hero => (
          <HeroCard
            key={hero.id}
            {...hero}/> //Tomamos cada una de las propiedades del hero y las esparcimos aca. Pq del otro lado espera las propiedades desestructuradas
        ))
      }
    </div>
  )
}
