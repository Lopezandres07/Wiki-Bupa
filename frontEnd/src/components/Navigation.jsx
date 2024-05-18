import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

export const Navigation = () => {
  const [token, setToken] = useState(false)
  const [userData, setUserData] = useState(false)

  const logOut = () => {
    setToken(!token)
    setUserData(!userData)
  }

  const navigate = useNavigate()

  return (
    <div className='navbar'>
      <div
        className='brand'
        onClick={() => navigate('/')}
      >
        <img
          alt='Logo'
          src='/img/logo2.png'
        />
        <h3>
          <strong>Wiki Bupa</strong>
        </h3>
      </div>
      <input
        type='text'
        placeholder='Buscar'
      />
      {token == true && userData == true ? (
        <div className='navigation-buttons'>
          <NavLink to='/about-us'>Acerca de la Wiki</NavLink>
          <NavLink to='/create-post'>Crear Publicación</NavLink>
          <NavLink
            to='/'
            onClick={logOut}
          >
            Cerrar Sesión
          </NavLink>
        </div>
      ) : (
        <div className='navigation-buttons'>
          <NavLink to='/about-us'>Acerca de la Wiki</NavLink>
          <NavLink
            to='/login'
            onClick={logOut}
          >
            Iniciar Sesión
          </NavLink>
        </div>
      )}
    </div>
  )
}
