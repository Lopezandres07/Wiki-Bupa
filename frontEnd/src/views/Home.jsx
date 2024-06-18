export const Home = () => {
  return (
    <section>
      <article className='home-content'>
        <div>
          <h2>Bienvenidos a la Wiki Bupa</h2>
          <p>
            ¡Tu fuente de conocimiento en las distintas áreas de la empresa!
          </p>
        </div>
        <div>
          <img
            src='/img/home-bg.png'
            alt='home-bg'
          />
        </div>
      </article>
      <article className='home-content center-home-content'>
        <div>
          <h2>Navega por el blog</h2>
          <p>
            Desplázate por la barra de navegación, donde encontrarás información
            de acuerdo al sector de la empresa que requieras.
          </p>
          <p>
            De igual manera, tienes disponible la barra de busqueda en la parte
            superior izquierda de la página, donde podrás realizar consultas de
            algún tema en específico.
          </p>
        </div>
        <div></div>
      </article>
      <article className='home-content'>
        <div>
          <h2>Comunidad Ti</h2>
          <p>
            Si tienes un nuevo rocedimiento, errores y sus soluciones, o
            aplicativos corporativos que gustes aportar para apoyar a la
            comunidad, puedes iniciar sesión con tu cuenta Bupa para que tengas
            habilitada la opción <b>"Crear Publicación"</b> en la barra de
            navegación.
          </p>
          <p>
            En ella, podrás crear una publicación con el tema que desees,
            indicándole una categroría asociada y el área a la que pertenece,
            además de asociar los archivos necesarios según el tema.
          </p>
        </div>
        <div></div>
      </article>
    </section>
  )
}
