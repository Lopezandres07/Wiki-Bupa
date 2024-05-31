import React, { useState } from 'react'

export const Aside = () => {
  const [tagsState, setTagsState] = useState({
    cruzblanca: false,
    casamatriz: false,
    clinicas: false,
    integramedica: false,
    aplicaciones: false,
    tips: false,
  })

  const toggleTagState = (tagName) => {
    setTagsState((prevState) => ({
      ...prevState,
      [tagName]: !prevState[tagName],
    }))
  }

  return (
    <aside>
      <ul className='tags'>
        <li onClick={() => toggleTagState('cruzblanca')}>
          Cruzblanca {tagsState['cruzblanca']}
        </li>
        {tagsState['cruzblanca'] && (
          <ul className='tagsToggled'>
            <li>Manuales</li>
            <li>Errores y soluciones</li>
            <li>Tips</li>
          </ul>
        )}
        <li onClick={() => toggleTagState('casamatriz')}>
          Casa Matriz{tagsState['casamatriz']}
        </li>
        {tagsState['casamatriz'] && (
          <ul className='tagsToggled'>
            <li>Manuales</li>
            <li>Errores y soluciones</li>
            <li>Tips</li>
          </ul>
        )}
        <li onClick={() => toggleTagState('clinicas')}>
          Clínicas {tagsState['clinicas']}
        </li>
        {tagsState['clinicas'] && (
          <ul className='tagsToggled'>
            <li>Manuales</li>
            <li>Errores y soluciones</li>
            <li>Tips</li>
          </ul>
        )}
        <li onClick={() => toggleTagState('integramedica')}>
          IntegraMédica {tagsState['integramedica']}
        </li>
        {tagsState['integramedica'] && (
          <ul className='tagsToggled'>
            <li>Manuales</li>
            <li>Errores y soluciones</li>
            <li>Tips</li>
          </ul>
        )}
        <li onClick={() => toggleTagState('aplicaciones')}>
          Aplicaciones {tagsState['aplicaciones']}
        </li>
        {tagsState['aplicaciones'] && (
          <ul className='tagsToggled'>
            <li>Office</li>
            <li>Utilitarias</li>
          </ul>
        )}
      </ul>
    </aside>
  )
}
