import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { UserContext } from '../providers/UserProvider'
import { sweetAlerts } from '../utilities/sweetAlerts'

export const Login = () => {
  const { login } = useContext(UserContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = handleSubmit(async (data) => {
    try {
      const response = await login(data.email, data.password)
      sweetAlerts(
        'success',
        `¡Saludos ${response.userData.firstname} ${response.userData.lastname}!`
      )
    } catch (error) {
      sweetAlerts('error', 'Usuario o contraseña incorrectos.')
    }
  })

  return (
    <section className='login-content'>
      <form onSubmit={onSubmit}>
        <h2>Iniciar Sesión</h2>
        <label htmlFor='email'>Correo</label>
        <input
          {...register('email', {
            required: {
              value: true,
              message: 'Correo es requerido',
            },
          })}
          placeholder='Correo electrónico'
        />
        {errors.email && <span>Este campo es requerido</span>}

        <label htmlFor='password'>Contraseña</label>
        <input
          type='password'
          {...register('password', {
            required: {
              value: true,
              message: 'Contraseña es requerida',
            },
          })}
          placeholder='Contraseña'
        />
        {errors.password && <span>Este campo es requerido</span>}

        <button>Enviar</button>
      </form>
    </section>
  )
}
