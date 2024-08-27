import React from 'react'
import { UserModal } from './UserModals'

export const DeletePostModal = ({ onClose }) => {
  return (
    <UserModal
      title='Eliminar Publicación'
      isOpen={isOpen}
    >
      <div className='create-user-form'>
        <p>¿Estás seguro que deseas eliminar esta publicación?</p>
        <div>
          <button>Eliminar</button>
          <button onClick={onClose}>Cancelar</button>
        </div>
      </div>
    </UserModal>
  )
}
