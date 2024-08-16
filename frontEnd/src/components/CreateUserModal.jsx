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
            pattern: {
              value: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+$/,
              message: 'Nombre inválido, solo se permiten letras',
            },
            validate: (value) =>
              value.trim() !== '' || 'Nombre no puede estar en blanco',
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
            pattern: {
              value: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+$/,
              message: 'Apellido inválido, solo se permiten letras',
            },
            validate: (value) =>
              value.trim() !== '' || 'Apellido no puede estar en blanco',
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
            pattern: {
              value: /[a-z0-9]+@[a-z]+\.[a-z]{2,4}$/,
              message: 'Correo inválido',
            },
            validate: (value) =>
              value.trim() !== '' || 'El correo no puede estar en blanco',
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
              message: 'La contraseña debe tener al menos 6 caracteres',
            },
            pattern: {
              value: /^\S*$/,
              message: 'La contraseña no puede contener espacios en blanco',
            },
            validate: (value) =>
              value.trim() !== '' || 'La contraseña no puede estar en blanco',
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
            minLength: {
              value: 2,
              message: 'Ocupación debe tener al menos 2 caracteres',
            },
            validate: (value) =>
              value.trim() !== '' || 'La ocupación no puede estar en blanco',
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
            minLength: {
              value: 2,
              message: 'Lugar de Trabajo debe tener al menos 2 caracteres',
            },
            validate: (value) =>
              value.trim() !== '' ||
              'El lugar de trabajo no puede estar en blanco',
          })}
        />
        {errors.workplace && <span>{errors.workplace.message}</span>}

        <label htmlFor='role_id'>Roles</label>
        <select
          id='role_id'
          defaultValue={''}
          {...register('role_id', {
            required: {
              value: true,
            },
          })}
        >
          <option
            value={''}
            disabled
          >
            Selecciona un rol
          </option>
          <option value={1}>Administrador</option>
          <option value={2}>Usuario</option>
          <option value={3}>Moderador</option>
        </select>
        {errors.role_id && <span>{errors.role_id.message}</span>}

        <div>
          <button>Crear Usuario</button>
          <button onClick={handleCancel}>Cancelar</button>
        </div>
      </form>
    </UserModal>
  )
}
