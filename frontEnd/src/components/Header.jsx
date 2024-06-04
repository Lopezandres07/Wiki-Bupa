import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { UserContext } from '../providers/UserProvider'

export const Header = () => {
  const { user, logout } = useContext(UserContext)
  const { userData, token } = user

  const navigate = useNavigate()

  return (
    <header>
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
        {token && userData ? (
          <div className='navigation-buttons'>
            <NavLink to='/about-us'>Acerca de la Wiki</NavLink>
            <NavLink to='/create-post'>Crear Publicación</NavLink>
            <NavLink
              to='/'
              onClick={logout}
            >
              Cerrar Sesión
            </NavLink>
          </div>
        ) : (
          <div className='navigation-buttons'>
            <NavLink to='/about-us'>Acerca de la Wiki</NavLink>
            <NavLink to='/login'>Iniciar Sesión</NavLink>
          </div>
        )}
      </div>
    </header>
  )
}
