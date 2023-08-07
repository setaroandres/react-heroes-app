//Este provider va a utilizar el authcontext para proveer la informacion a toda la app
import { useReducer } from 'react';
import { types } from '../types/types';
import { AuthContext, authReducer } from './';

//Este provider debe ser visto por toda la aplicacion
export const AuthProvider = ({children}) => {
  //Necesitamos instanciar el reducer para poder usarlo y le pasamos el reducer que creamos
  //La funcion de inicializacion (init) la podemos utilizar para inicializar el estado y se la pasamos al reducer como tercer parametro
  const init = () => {
    //Preguntamos al inicio si el user está guardado en el localStorage
    const user = JSON.parse(localStorage.getItem('user'));
    //La fcn de init detecta que lo tenemos en el localstorgae y lo carga
    return {
      logged: !!user, //usamos la doble negacion para devolver un boolean cuando existe y no existe el usuario
      user//devolvemos el user, si no existe va a devolver un null
    }
  }
  const [authState, dispatch] = useReducer(authReducer, {}, init);
  //De alguna manera aca debemos establecer que el usuario está conectado
  //Creamos una fcn login para recibir lo que nos manda el usuario y actuar segun esa informacion. El login lo que termina haciendo es el dispatch de una accion.
  //Para hacer el dispatch necesitamos una accion.
  const login = (name = '') => {

    const user = {
      id: '123',
      name
    }

    const action = {
      type: types.login,
      payload: user
    }

    //en el localStorage solo podemos mandar strings, por esa razon los guardamos con el JSON.stringify
    localStorage.setItem('user', JSON.stringify(user));

    dispatch(action);

    //console.log({authState})
  }

  const logout = () => {
    localStorage.removeItem('user');
    const action = { type: types.logout };
    dispatch(action);
  }

  return (
    //Con esto ya proveemos de informacion a todos los children
    //En el value exponemos el estado del login (logeado o no) y la fcn de login que va a hacer el dispatch
    //En el value tenemos que mandar todos los metodos y atributos que queremos que se expongan
    <AuthContext.Provider value={{
      //Atributos
      ...authState,
      //Metodos
      login,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  )
}
