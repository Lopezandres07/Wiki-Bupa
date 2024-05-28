import React from 'react'

export const AboutUs = () => {
  return (
    <section>
      <div className='about-content'>
        <div>
          <h3>Acerca de nosotros</h3>
          <p>
            Somos un equipo dedicado de profesionales de TI comprometidos en
            brindar las mejores soluciones y recursos para optimizar la atención
            y el soporte que ofrecemos a nuestros usuarios. Nuestro objetivo es
            proporcionar un espacio centralizado donde puedas encontrar manuales
            detallados, aplicativos clave y otros recursos esenciales para
            brindar un soporte eficiente y efectivo.
          </p>
        </div>
        <div>
          <h3>Nuestra Misión</h3>
          <p>
            En nuestro blog de Soporte TI, la misión es mantener al equipo
            actualizado con las últimas tecnologías y tendencias en el mundo de
            la informática. Nos esforzamos por ofrecer manuales claros y
            completos que te guíen paso a paso en la resolución de problemas,
            aplicativos fundamentales para facilitar tus tareas diarias y
            consejos prácticos para optimizar el rendimiento de nuestros
            sistemas.
          </p>
        </div>
        <div>
          <h3>¿Qué Puedes Esperar?</h3>
          <p>
            Al explorar nuestro blog, encontrarás una amplia gama de recursos
            diseñados específicamente para ayudarte en tu trabajo diario. Desde
            manuales detallados sobre el uso de nuestras herramientas hasta
            aplicativos que agilizan procesos clave, nuestro objetivo es
            proporcionarte todo lo que necesitas para ofrecer un soporte eficaz
            y de alta calidad.
          </p>
        </div>
      </div>
      <div className='about-photo'>
        <img
          src='/img/team-ti.png'
          alt='About Photo'
        />
      </div>
    </section>
  )
}
