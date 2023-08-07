import { types } from "../types/types";

//Creamos el reducer para manejar los estados de la app
export const authReducer = (state = {}, action) => {

  switch (action.type) {
    case types.login:
      return {
        ...state, //hacemos la desestructuracion del state para mantener siempre el state anterior (por si tenemos mas propiedades)
        logged: 'true',
        user: action.payload
      };

    case types.logout:
      return {
        logged: 'false',
      };
  
    default:
      return state;
  }

}