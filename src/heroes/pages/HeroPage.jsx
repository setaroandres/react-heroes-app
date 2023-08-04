import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers";

export const HeroPage = () => {

  const imgBaseUrl = '/assets/heroes/'
  const {id, ...rest} = useParams(); //Con este hook podemos obtener los parametros por url
  
  //Cuando tenemos funciones que estamos llamando directamente en la raiz, podemos usar un useMemo para no gastar recursos nuevamente al re renderizar el componente
  const hero = useMemo(() => getHeroById(id), [id]);//El useMemo dispara un callback que va a ser la fcn que queremos llamar
  const navigate = useNavigate();

  const onNavigateBack = () => {
    navigate(-1);
  }

  //si no tenemos hero lo sacamos de la pantalla
  if (!hero) {
    return <Navigate to="/marvel" />
  }

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img 
          src={`${imgBaseUrl + id}.jpg`}
          alt={hero.superhero}
          className="img-thumbnail animate__animated animate__fadeInLeft"/>
      </div>

      <div className="col-8">
        <h3>{hero.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><b>Alter Ego: </b>{hero.alter_ego}</li>
          <li className="list-group-item"><b>Publisher: </b>{hero.publisher}</li>
          <li className="list-group-item"><b>First Appearance: </b>{hero.first_appearance}</li>
        </ul>
        <h5 className="mt-3">Characters</h5>
        <p>{hero.characters}</p>

        <button 
          className="btn btn-outline-primary"
          onClick={onNavigateBack}>
          Regresar
        </button>
      </div>
    </div>
  )
}
