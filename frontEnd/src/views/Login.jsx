import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { UserContext } from '../providers/UserProvider'
import { sweetAlerts } from '../utilities/sweetAlerts'
import { NavLink } from 'react-router-dom'

export const Login = () => {
  const { login } = useContext(UserContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = handleSubmit(async (data) => {
    console.log(data)

    try {
      const response = await login(data)
      console.log('User data: ', response)

      if (response.success) {
        sweetAlerts(
          'success',
          `¡Bienvenida/o ${response.userData.firstname} ${response.userData.lastname}!`
        )
      }
    } catch (error) {
      sweetAlerts('error', 'Usuario o contraseña incorrectos.')
    }
  })

  return (
    <section className='login-content'>
      <h2>Ingresa a la Wiki Bupa</h2>
      <form onSubmit={onSubmit}>
        <label htmlFor='email'>Correo</label>
        <input
          {...register('email', {
            required: {
              value: true,
              message: 'Correo es requerido',
            },
          })}
        />
        {errors.email && <span>{errors.email.message}</span>}

        <label htmlFor='password'>Contraseña</label>
        <input
          type='password'
          {...register('password', {
            required: {
              value: true,
              message: 'Contraseña es requerida',
            },
          })}
        />
        {errors.password && <span>{errors.password.message}</span>}
        <button>Iniciar Sesión</button>
        <NavLink to='/password-reset'>¿Olvidó su contraseña?</NavLink>
      </form>
    </section>
  )
}
