import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Footer = () => {
  return (
    <>
      <div className='footer'>
        <article>
          <strong>UBICACIÓN</strong>
          <p>Avenida Cerro Colorado 5240, Las Condes</p>
          <p>Piso 5, Soporte Ti</p>
          <p>Santiago de Chile</p>
        </article>
        <article>
          <strong>ACERCA DE</strong>
          <NavLink to='/about-us'>Acerca de la Wiki</NavLink>
          <NavLink to='/authors'>Desarrollador por</NavLink>
        </article>
        <article>
          <strong>INFORMACIÓN</strong>
          <NavLink to='/opinions'>Opiniones y mejoras</NavLink>
        </article>
      </div>
      <hr />
      <Link to='/'>
        <img
          alt='Logo'
          src='/img/logo2.png'
          width={100}
        />
      </Link>
    </>
  )
}
