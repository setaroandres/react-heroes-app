//Aca vamos a establecer la logica de las rutas privadas. Lo tratamos como un funcional component

import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../auth";

export const PrivateRoute = ({children}) => {//le pasamos el children, lo que implica que es un high order component

  //Debemos saber si el user esta autenticado, usamos el useContext
  const {logged} = useContext(AuthContext);
  const {pathname, search} = useLocation();

  const lastPath = pathname + search;
  localStorage.setItem('lastPath', lastPath);

  //Si esta logeado lo vamos a madar a las rutas hijas, sino al login
  return (logged) 
    ? children
    : <Navigate to='/login' />
}
