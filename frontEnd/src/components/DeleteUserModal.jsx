import { useContext, useEffect } from 'react'
import { UserContext } from '../providers/UserProvider'
import Swal from 'sweetalert2'
import PropTypes from 'prop-types'

export const DeleteUserModal = ({ user, onClose }) => {
  const { deleteUser } = useContext(UserContext)

  const handleDelete = async (user) => {
    try {
      await deleteUser(user.id)
      Swal.fire('Eliminado!', 'El usuario ha sido eliminado.', 'success')
      onClose()
    } catch (error) {
      Swal.fire('Error!', 'Hubo un problema al eliminar el usuario.', 'error')
    }
  }

  useEffect(() => {
    if (user) {
      Swal.fire({
        text: `¿Estás seguro que deseas eliminar a ${user.firstname} ${user.lastname}?`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Eliminar',
        confirmButtonColor: '#dc3545',
        cancelButtonText: 'Cancelar',
      }).then((result) => {
        if (result.isConfirmed) {
          handleDelete(user)
        } else {
          onClose()
        }
      })
    }
  }, [user, onClose])

  return null
}

DeleteUserModal.propTypes = {
  user: PropTypes.object,
  onClose: PropTypes.func.isRequired,
}
