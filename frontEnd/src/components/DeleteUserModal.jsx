import { useContext } from 'react'
import { UserContext } from '../providers/UserProvider'
import { sweetAlerts } from '../utilities/sweetAlerts'
import { UserModal } from './UserModals'

export const DeleteUserModal = ({ user, isOpen, onClose }) => {
  const { deleteUser } = useContext(UserContext)

  const handleDelete = async (user) => {
    try {
      await deleteUser(user.id)
      sweetAlerts('success', `El usuario ha sido eliminado con éxito.`)
      onClose()
    } catch (error) {
      sweetAlerts('error', `Error al eliminar el usuario: ${error} `)
    }
  }

  return (
    <UserModal
      title='Eliminar Usuario'
      isOpen={isOpen}
    >
      <div className='create-user-form'>
        <p>
          {`¿Estás seguro que deseas eliminar a ${user.firstname} ${user.lastname}?`}
        </p>
        <div>
          <button onClick={() => handleDelete(user)}>Eliminar</button>
          <button onClick={onClose}>Cancelar</button>
        </div>
      </div>
    </UserModal>
  )
}
