import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export const PostForm = ({
  onSubmit,
  onCancel,
  mode,
  buttonText,
  defaultValues,
}) => {
  const [selectedArea, setSelectedArea] = useState(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const handleAreaChange = (e) => {
    setSelectedArea(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor='title'>Título</label>
      <input
        type='text'
        id='title'
        placeholder='Título'
        {...register('title', {
          required: mode === 'create' && {
            value: true,
            message: 'Título es requerido',
          },
          minLength: {
            value: 6,
            message: 'Título debe tener al menos 6 caracteres',
          },
          validate: (value) =>
            value.trim() !== '' || 'Título no puede estar en blanco',
        })}
      />
      {errors.title && <span>{errors.title.message}</span>}

      <label htmlFor='area'>área</label>
      <select
        id='area'
        defaultValue={defaultValues?.area || ''}
        {...register('area', {
          required: mode === 'create' && {
            value: true,
            message: 'Área es requerida',
          },
        })}
        onChange={handleAreaChange}
      >
        <option
          value=''
          disabled
        >
          Selecciona un área
        </option>
        <option value={1}>Cruz Blanca</option>
        <option value={2}>Casa Matriz</option>
        <option value={3}>Clínicas</option>
        <option value={4}>IntegraMédica</option>
        <option value={5}>Utilitarios</option>
      </select>
      {errors.area && <span>{errors.area.message}</span>}

      <label htmlFor='category'>Categoría</label>
      <select
        id='category'
        defaultValue={defaultValues?.category || ''}
        {...register('category', {
          required: mode === 'create' && {
            value: true,
            message: 'Categoría es requerida',
          },
        })}
      >
        <option
          value=''
          disabled
        >
          Seleccione una categoría
        </option>
        {selectedArea !== '5' ? (
          <>
            <option value={1}>Manuales</option>
            <option value={2}>Errores y soluciones</option>
            <option value={3}>Tips</option>
          </>
        ) : (
          <>
            <option value={4}>Aplicativos</option>
            <option value={5}>Dispositivos</option>
            <option value={6}>Microsoft</option>
          </>
        )}
      </select>
      {errors.category && <span>{errors.category.message}</span>}

      <label htmlFor='content'>Contenido</label>
      <textarea
        id='content'
        placeholder='Contenido'
        {...register('content', {
          required: mode === 'create' && {
            value: true,
            message: 'Contenido es requerido',
          },
          minLength: {
            value: 20,
            message: 'Contenido debe tener al menos 20 caracteres',
          },
          validate: (value) =>
            value.trim() !== '' || 'Contenido no puede estar en blanco',
        })}
      />
      <div>
        <button>{buttonText}</button>
        <button onClick={onCancel}>Cancelar</button>
      </div>
    </form>
  )
}
