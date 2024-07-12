import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { UserContext } from '../providers/UserProvider'

export const Header = () => {
  const { user, logout } = useContext(UserContext)
  const { userData, token } = user
  console.log('User Data: ', userData)
  console.log('token: ', token)

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
        {token ? (
          userData.role_id === 1 ? (
            <div className='navigation-buttons'>
              <NavLink to='/about-us'>Acerca de la Wiki</NavLink>
              <NavLink to='/users-management'>Gestor de Usuarios</NavLink>
              <NavLink to='/posts-management'>Gestor de Publicaciones</NavLink>
              <NavLink to={`/my-posts/${userData.id}`}>
                Mis Publicaciones
              </NavLink>
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
              <NavLink to={`/my-posts/${userData.id}`}>
                Mis Publicaciones
              </NavLink>
              <NavLink
                to='/'
                onClick={logout}
              >
                Cerrar Sesión
              </NavLink>
            </div>
          )
        ) : (
          <div className='navigation-buttons'>
            <NavLink to='/about-us'>Acerca de la Wiki</NavLink>
            <NavLink to='/login'>Iniciar Sesión</NavLink>
          </div>
        )}

        {/* {token && userData.role_id === 1 ? (
          <div className='navigation-buttons'>
            <NavLink to='/post-management'>Gestión de Publicaciones</NavLink>
            <NavLink to='/about-us'>Acerca de la Wiki</NavLink>
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
        )} */}
      </div>
    </header>
  )
}
