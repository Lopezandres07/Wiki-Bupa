export const Nav = () => {
  return (
    <nav>
      <ul className='tags'>
        <li>
          Cruz Blanca
          <ul className='tags-toggled'>
            <li>Manuales</li>
            <li>Errores y soluciones</li>
            <li>Tips</li>
          </ul>
        </li>
        <li>
          Casa Matriz
          <ul className='tags-toggled'>
            <li>Manuales</li>
            <li>Errores y soluciones</li>
            <li>Tips</li>
          </ul>
        </li>
        <li>
          Clínicas
          <ul className='tags-toggled'>
            <li>Manuales</li>
            <li>Errores y soluciones</li>
            <li>Tips</li>
          </ul>
        </li>
        <li>
          IntegraMédica
          <ul className='tags-toggled'>
            <li>Manuales</li>
            <li>Errores y soluciones</li>
            <li>Tips</li>
          </ul>
        </li>
        <li>
          Aplicaciones
          <ul className='tags-toggled'>
            <li>Office</li>
            <li>Utilitarias</li>
          </ul>
        </li>
      </ul>
    </nav>
  )
}
