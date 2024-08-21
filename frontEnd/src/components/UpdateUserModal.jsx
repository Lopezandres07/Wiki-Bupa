import React, { useContext } from 'react'
import { UserContext } from '../providers/UserProvider'
import { sweetAlerts } from '../utilities/sweetAlerts'
import { UserForm } from './UserForm'
import { UserModal } from './UserModals'
import { useForm } from 'react-hook-form'

export const UpdateUserModal = ({ isOpen, onClose, user }) => {
  const { updateUser } = useContext(UserContext)
  const { reset } = useForm()

  const handleUpdateUser = async (data) => {
    const { password, occupation, workplace, role_id: roleIdString } = data
    const role_id = Number(roleIdString)

    const {
      id,
      firstname,
      lastname,
      occupation: userOccupation,
      workplace: userWorkplace,
      role_id: userRoleId,
    } = user

    if (!password && !occupation && !workplace && role_id === userRoleId) {
      sweetAlerts('warning', 'Por favor ingresa algún dato a modificar')
      reset()
    } else {
      const newUserData = {
        ...data,
        id,
        firstname,
        lastname,
        occupation: occupation || userOccupation,
        workplace: workplace || userWorkplace,
        role_id: role_id || userRoleId,
      }

      if (!newUserData.password) {
        delete newUserData.password
      }

      try {
        await updateUser(newUserData)
        sweetAlerts('success', `El usuario ha sido actualizado con éxito.`)
        reset()
        onClose()
      } catch (error) {
        sweetAlerts('error', `Error al actualizar el usuario: ${error}`)
      }
    }
  }

  const handleCancel = () => {
    reset()
    onClose()
  }
  return (
    <UserModal
      title='Actualizar Usuario'
      isOpen={isOpen}
    >
      <UserForm
        onSubmit={handleUpdateUser}
        onCancel={handleCancel}
        fields={['password', 'occupation', 'workplace', 'role_id']}
        buttonText='Actualizar'
        mode='update'
        defaultValues={user}
      />
    </UserModal>
  )
}
