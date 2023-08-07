//Creamos el contexto para al autenticacion y para que pueda ser usado por lo demas componentes.
//El context solo crea el contexto con el createContext(). Desp tenemos que hacer el provider que lo va a retornar.
//Ese provider va a estar instanciado haciendo un wrapper del route mas arriba que quiero utilizar, en este caso HeroesApp.jsx

import { createContext } from "react";

export const AuthContext = createContext();
