import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context";

export const LoginPage = () => {
  //Aca instanciamos el context para poder hacer el dispatch de la accion 
  const {login} = useContext(AuthContext); //Desesctructuramos la fcn de login del context para poder usarla aca

  const navigate = useNavigate();

  const onLogin = () => {

    const lastPath = localStorage.getItem('lastPath') || '/'; //con esa || verificacmos que no sea null, si lo es lo mandamos al '/'

    //Aca tenemos que hacer el dispatch de la accion del login (login or logout). Para eso necesitamos acceso al context
    login('Ramon Ismael Medina Bello');//Esta fcn de login es la que creamos en el context

    navigate(lastPath, {
      replace: true
    });
  }

  return (
    <div
      className="container mt-5">

      <h1>Login</h1>
      <hr />

      <button 
        className="btn btn-primary"
        onClick={onLogin}>
        Login
      </button>

    </div>
  )
}
