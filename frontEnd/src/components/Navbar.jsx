import { useEffect, useState } from 'react'

export const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav>
      <ul className={`tags ${isScrolled ? 'tags-scrolled' : ''}`}>
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
