import React from 'react'
import { AuthProvider } from './auth'
import { AppRouter } from './router/AppRouter'

export const HeroesApp = () => {
  return (
    //Utilizamos el authProvider aca para poder accede al context que queremos compartir con toda la app
    <AuthProvider>
        <AppRouter />
    </AuthProvider>
  )
}
