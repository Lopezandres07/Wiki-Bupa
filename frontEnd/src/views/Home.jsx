import React from 'react'

export const Home = () => {
  return (
    <>
      <div className='home-logo'>
        <h2>Bienvenidos a la Wiki Bupa</h2>
        <h3>
          ¡Tu fuente de conocimiento en las distintas áreas de la empresa!
        </h3>
        <img
          src='/img/home-bg.png'
          alt='home-bg'
        />
      </div>
      <article className='home'>
        <div>
          <p>
            Desplázate por la barra lateral donde podrás visualizar en las
            diferentes opciones:
          </p>
          <ul>
            <li>
              Manuales: Acá se almacenan los procedimientos de instalación de
              aplicativos, así como sus instaladores y demás.
            </li>
            <li>
              Errores y Soluciones: En este apartado se muestran tips para
              solventar problemas recurrentes de los aplicativos.
            </li>
            <li>
              Aplicaciones: Mediante esta opción, obtendras aplicativos que son
              útiles para las tareas que desempeñen los usuarios.
            </li>
          </ul>
          <p>
            De igual manera, tienes disponible la barra de busqueda en la parte
            superior izquierda de la página, donde podrás buscar algún tema en
            específico.
          </p>
        </div>
        <div>
          <p>
            Si tienes algún tema referente sobre algún procedimiento, tips nuevo
            aplicativo que gustes aportar para apoyar a la comunidad, puedes
            iniciar sesión con tu cuenta Bupa para que tengas habilitada la
            opción <b>"Crear Publicación"</b> en la barra de navegación.
          </p>
        </div>
      </article>
    </>
  )
}
