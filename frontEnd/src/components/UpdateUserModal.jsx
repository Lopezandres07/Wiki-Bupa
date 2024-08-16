import React, { useContext } from 'react'
import { UserContext } from '../providers/UserProvider'
import { sweetAlerts } from '../utilities/sweetAlerts'
import { UserModal } from './userModals'
import { useForm } from 'react-hook-form'

export const UpdateUserModal = ({ isOpen, onClose, user }) => {
  const { updateUser } = useContext(UserContext)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const handleUpdateUser = async (data) => {
    console.log('Update user: ', data)
    console.log('User: ', user)

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

      console.log('New user data: ', newUserData)

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
      <form
        id='createUserForm'
        className='create-user-form'
        onSubmit={handleSubmit(handleUpdateUser)}
      >
        <label htmlFor='password'>Contraseña</label>
        <input
          type='password'
          id='password'
          placeholder='Contraseña'
          {...register('password', {
            minLength: {
              value: 6,
              message: 'La contraseña debe tener al menos 6 caracteres',
            },
          })}
        />
        {errors.password && <span>{errors.password.message}</span>}

        <label htmlFor='occupation'>Ocupación</label>
        <input
          type='text'
          id='occupation'
          placeholder='Ocupación'
          {...register('occupation')}
        />

        <label htmlFor='workplace'>Lugar de Trabajo</label>
        <input
          type='text'
          id='workplace'
          placeholder='Lugar de Trabajo'
          {...register('workplace')}
        />

        <label htmlFor='role_id'>Roles</label>
        <select
          id='role_id'
          defaultValue={user.role_id}
          {...register('role_id')}
        >
          <option value={1}>Administrador</option>
          <option value={2}>Usuario</option>
          <option value={3}>Moderador</option>
        </select>
        <div>
          <button>Actualizar</button>
          <button onClick={handleCancel}>Cancelar</button>
        </div>
      </form>
    </UserModal>
  )
}
