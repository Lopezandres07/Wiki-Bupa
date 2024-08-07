import React, { useContext } from 'react'
import { UserContext } from '../providers/UserProvider'
import { UserModal } from './userModals'
import { useForm } from 'react-hook-form'
import { sweetAlerts } from '../utilities/sweetAlerts'

export const CreateUserModal = ({ isOpen, onClose }) => {
  const { registerUser } = useContext(UserContext)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

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
      <form
        id='createUserForm'
        className='create-user-form'
        onSubmit={handleSubmit(handleCreate)}
      >
        <label htmlFor='firstname'>Nombre</label>
        <input
          type='text'
          id='firstname'
          placeholder='Nombre'
          {...register('firstname', {
            required: {
              value: true,
              message: 'Nombre es requerido',
            },
            minLength: {
              value: 2,
              message: 'Nombre debe tener al menos 2 caracteres',
            },
          })}
        />
        {errors.firstname && <span>{errors.firstname.message}</span>}

        <label htmlFor='lastname'>Apellido</label>
        <input
          type='text'
          id='lastname'
          placeholder='Apellido'
          {...register('lastname', {
            required: {
              value: true,
              message: 'Apellido es requerido',
            },
            minLength: {
              value: 2,
              message: 'Apellido debe tener al menos 2 caracteres',
            },
          })}
        />
        {errors.lastname && <span>{errors.lastname.message}</span>}

        <label htmlFor='email'>Correo Electrónico</label>
        <input
          type='email'
          id='email'
          placeholder='Correo Electrónico'
          {...register('email', {
            required: { value: true, message: 'Correo es requerido' },
            pattern: { value: /^\S+@\S+$/i, message: 'Correo inválido' },
          })}
        />
        {errors.email && <span>{errors.email.message}</span>}

        <label htmlFor='password'>Contraseña</label>
        <input
          type='password'
          id='password'
          placeholder='Contraseña'
          {...register('password', {
            required: {
              value: true,
              message: 'Contraseña es requerida',
            },
            minLength: {
              value: 6,
              message: 'La contraseña debe tener al menos 8 caracteres',
            },
          })}
        />
        {errors.password && <span>{errors.password.message}</span>}

        <label htmlFor='occupation'>Ocupación</label>
        <input
          type='text'
          id='occupation'
          placeholder='Ocupación'
          {...register('occupation', {
            required: {
              value: true,
              message: 'Ocupación es requerida',
            },
          })}
        />
        {errors.occupation && <span>{errors.occupation.message}</span>}

        <label htmlFor='workplace'>Lugar de Trabajo</label>
        <input
          type='text'
          id='workplace'
          placeholder='Lugar de Trabajo'
          {...register('workplace', {
            required: {
              value: true,
              message: 'Lugar de Trabajo es requerido',
            },
          })}
        />
        {errors.workplace && <span>{errors.workplace.message}</span>}

        <label htmlFor='role_id'>Roles</label>
        <select
          id='role_id'
          defaultValue={2}
          {...register('role_id', {
            required: {
              value: true,
              message: 'Rol es requerido',
            },
          })}
        >
          <option value='1'>Administrador</option>
          <option value='2'>Usuario</option>
          <option value='3'>Moderador</option>
        </select>
        <div>
          <button>Crear Usuario</button>
          <button onClick={handleCancel}>Cancelar</button>
        </div>
      </form>
    </UserModal>
  )
}
