import React, { useContext } from 'react'
import { UserContext } from '../providers/UserProvider'
import { sweetAlerts } from '../utilities/sweetAlerts'
import { UserForm } from './UserForm'
import { UserModal } from './UserModals'
import { useForm } from 'react-hook-form'

export const CreateUserModal = ({ isOpen, onClose }) => {
  const { registerUser } = useContext(UserContext)
  const { reset } = useForm()

  const handleCreate = async (data) => {
    console.log('New user: ', data)
    try {
      await registerUser(data)
      sweetAlerts('success', `El usuario ha sido creado con éxito.`)
      reset()
      onClose()
    } catch (error) {
      sweetAlerts('error', `Error al crear el usuario: ${error} `)
    }
  }

  const handleCancel = () => {
    reset()
    onClose()
  }

  return (
    <UserModal
      title='Crear Usuario'
      isOpen={isOpen}
    >
      <UserForm
        onSubmit={handleCreate}
        onCancel={handleCancel}
        fields={[
          'firstname',
          'lastname',
          'email',
          'password',
          'occupation',
          'workplace',
          'role_id',
        ]}
        mode='create'
        buttonText='Crear'
      />
    </UserModal>
  )
}
