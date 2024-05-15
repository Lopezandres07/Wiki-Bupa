import React, { useState } from 'react'

export const Opinions = () => {
  const [opinion, setOpinion] = useState('')
  const [email, setEmail] = useState('')

  return (
    <>
      <div className='opinion-content'>
        <form>
          <h3>¡Envíanos tu opinión o ideas de mejora!</h3>
          <p>
            En este apartado, pueden compartir sus comentarios, sugerencias e
            ideas de mejora sobre la plataforma. A través de este, se busca
            fomentar la participación activa de la comunidad para recopilar
            información valiosa que nos ayude a entender sus necesidades y
            expectativas.
          </p>
          <p>
            El equipo puede compartir sus opiniones sobre la usabilidad del
            sitio, las funcionalidades deseadas, los problemas encontrados y
            cualquier otra sugerencia relevante. Esto nos permite mejorar
            continuamente la experiencia del usuario y ofrecer un servicio más
            adaptado y satisfactorio. Los comentarios enviados a través de este
            componente serán revisados por nuestro equipo para evaluar posibles
            mejoras y ajustes en la plataforma.
          </p>
          <label htmlFor='email'>Tu correo electrónico:</label>
          <input
            type='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor='opinion'>Comenta aquí:</label>
          <textarea
            id=''
            value={opinion}
            onChange={(e) => setOpinion(e.target.value)}
            required
          ></textarea>
          <button type='submit'>Enviar</button>
        </form>
        <div>
          <img
            src='/img/improve.png'
            alt='Opinions Photo'
          />
        </div>
      </div>
    </>
  )
}
