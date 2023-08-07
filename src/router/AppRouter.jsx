import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../auth"
import { HeroesRoutes } from "../heroes"
import { PrivateRoute } from "./PrivateRoute"
import { PublicRoute } from "./PublicRoute"


export const AppRouter = () => {
  //A este router entra siempre pq esta definido en el componente de punto de entrada (HeroesApp). Una vez que entra, si la ruta es 'login', carga el login component
  //Si al ruta es ditinta, carga el HeroesRoute, que tiene el navBar y los links necesarios para esa navBar
  return (
    <>
      <Routes>
        <Route path="login/*" element={
          <PublicRoute>
            <Routes>
              <Route path="/*" element={<LoginPage />}/>
            </Routes>
          </PublicRoute>
        } />

        {/* <Route path="/login" element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
          } 
        /> */}
        
        {/**Esta es la ruta que necesitamos proteger, esta y todas las subrutas */}
        <Route path="/*" element={
          <PrivateRoute>
            <HeroesRoutes />
          </PrivateRoute>}>{/**Directamente le pasamos el componente de las rutas */}
        </Route>
        {/* <Route path="/*" element={<HeroesRoutes /> /**Cualquier ruta que no sea el login pasa por este componente */}
      </Routes>
    </>
  )
}
