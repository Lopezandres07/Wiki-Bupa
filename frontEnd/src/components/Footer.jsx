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
          <NavLink to='/authors'>Autores del blog</NavLink>
          <NavLink to='/initiative'>Iniciativa</NavLink>
          <NavLink to='/opinions'>Opiniones y mejoras</NavLink>
        </article>
        <article>
          <strong>INFORMACIÓN</strong>
          <NavLink to='/legal-advisor'>Aviso legal</NavLink>
          <NavLink to='/user-terms'>Términos de uso</NavLink>
          <NavLink to='/privacy-politics'>Políticas de privacidad</NavLink>
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
