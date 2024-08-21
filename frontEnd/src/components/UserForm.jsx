import React from 'react'
import { useForm } from 'react-hook-form'

export const UserForm = ({
  onSubmit,
  onCancel,
  fields,
  mode,
  buttonText,
  defaultValues,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  return (
    <form
      className='create-user-form'
      onSubmit={handleSubmit(onSubmit)}
    >
      {fields.includes('firstname') && (
        <>
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
        </>
      )}

      {fields.includes('lastname') && (
        <>
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
        </>
      )}

      {fields.includes('email') && (
        <>
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
        </>
      )}

      {fields.includes('password') && (
        <>
          <label htmlFor='password'>Contraseña</label>
          <input
            type='password'
            id='password'
            placeholder='Contraseña'
            {...register('password', {
              required: mode === 'create' && {
                value: true,
                message: 'Contraseña es requerida',
                validate: (value) =>
                  value.trim() !== '' ||
                  'La contraseña no puede estar en blanco',
              },
              minLength: {
                value: 6,
                message: 'La contraseña debe tener al menos 6 caracteres',
              },
              pattern: {
                value: /^\S*$/,
                message: 'La contraseña no puede contener espacios en blanco',
              },
            })}
          />
          {errors.password && <span>{errors.password.message}</span>}
        </>
      )}

      {fields.includes('occupation') && (
        <>
          <label htmlFor='occupation'>Ocupación</label>
          <input
            type='text'
            id='occupation'
            placeholder='Ocupación'
            {...register('occupation', {
              required: mode === 'create' && {
                value: true,
                message: 'Ocupación es requerida',
                validate: (value) =>
                  value.trim() !== '' ||
                  'La ocupación no puede estar en blanco',
              },
              minLength: {
                value: 2,
                message: 'La ocupación debe tener al menos 2 caracteres',
              },
              pattern: {
                value: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]/,
                message: 'Ocupación inválida, solo se permiten letras',
              },
            })}
          />
          {errors.occupation && <span>{errors.occupation.message}</span>}
        </>
      )}

      {fields.includes('workplace') && (
        <>
          <label htmlFor='workplace'>Lugar de Trabajo</label>
          <input
            type='text'
            id='workplace'
            placeholder='Lugar de Trabajo'
            {...register('workplace', {
              required: mode === 'create' && {
                value: true,
                message: 'Lugar de Trabajo es requerido',
                validate: (value) =>
                  value.trim() !== '' ||
                  'El lugar de trabajo no puede estar en blanco',
              },
              minLength: {
                value: 2,
                message: 'El lugar de Trabajo debe tener al menos 2 caracteres',
              },
              pattern: {
                value: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]/,
                message: 'Lugar de trabajo inválido, solo se permiten letras',
              },
            })}
          />
          {errors.workplace && <span>{errors.workplace.message}</span>}
        </>
      )}

      {fields.includes('role_id') && (
        <>
          <label htmlFor='role_id'>Roles</label>
          <select
            id='role_id'
            defaultValue={defaultValues?.role_id || ''}
            {...register('role_id', {
              required: mode === 'create' && {
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
        </>
      )}
      <div>
        <button>{buttonText}</button>
        <button onClick={onCancel}>Cancelar</button>
      </div>
    </form>
  )
}
