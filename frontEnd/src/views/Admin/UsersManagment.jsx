import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../providers/UserProvider'
import { getRoleName } from '../../utilities/roleUtils'
import { CreateUserModal } from '../../components/CreateUserModal'
import { ResetPasswordModal } from '../../components/ResetPasswordModal'
import { UpdateUserModal } from '../../components/UpdateUserModal'
import { DeleteUserModal } from '../../components/DeleteUserModal'

export const UsersManagment = () => {
  const { getAllUsers } = useContext(UserContext)
  const [allUsers, setAllUsers] = useState([])
  const [selectedUser, setSelectedUser] = useState(null)
  const [openModal, setOpenModal] = useState(null)
  console.log('openModal:', openModal)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getAllUsers()
        setAllUsers(response)
      } catch (error) {
        console.error('Failed to fetch users:', error)
      }
    }

    fetchUsers()
  }, [])

  const handleCheckboxChange = (user) => {
    setSelectedUser((prevSelectedUser) => {
      const newSelectedUser = prevSelectedUser === user ? null : user
      if (newSelectedUser === null) {
        setOpenModal(null)
      }
      return newSelectedUser
    })
  }

  return (
    <section className='user-managment-contet'>
      <div>
        <button onClick={() => setOpenModal('createUser')}>
          Nuevo Usuario
        </button>
        {selectedUser !== null ? (
          <>
            <button onClick={() => setOpenModal('resetPassword')}>
              Restablecer Contraseña
            </button>
            <button onClick={() => setOpenModal('updateUser')}>
              Actualizar Usuario
            </button>
            <button onClick={() => setOpenModal('deleteUser')}>
              Eliminar Usuario
            </button>
          </>
        ) : (
          <>
            <button disabled>Restablecer Contraseña</button>
            <button disabled>Actualizar Usuario</button>
            <button disabled>Eliminar Usuario</button>
          </>
        )}
      </div>
      <div>
        <table className='users-table'>
          <thead>
            <tr>
              <th colSpan={2}>Nombre y Apellido</th>
              <th>Email</th>
              <th>Ocupación</th>
              <th>Lugar de Trabajo</th>
              <th>Roles</th>
            </tr>
          </thead>
          <tbody>
            {allUsers.map((user) => (
              <tr
                key={user.id}
                style={{
                  backgroundColor: selectedUser === user ? '#92c9f7' : '',
                }}
              >
                <td className='users-checkbox'>
                  <input
                    type='checkbox'
                    checked={selectedUser === user}
                    onChange={() => handleCheckboxChange(user)}
                  />
                </td>
                <td>
                  {user.firstname} {user.lastname}
                </td>
                <td>{user.email}</td>
                <td>{user.occupation}</td>
                <td>{user.workplace}</td>
                <td>{getRoleName(user.role_id)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {openModal === 'createUser' && (
        <CreateUserModal onClose={() => setOpenModal(null)} />
      )}
      {openModal === 'resetPassword' && (
        <ResetPasswordModal
          user={selectedUser}
          onClose={() => setOpenModal(null)}
        />
      )}
      {openModal === 'updateUser' && (
        <UpdateUserModal
          user={selectedUser}
          onClose={() => setOpenModal(null)}
        />
      )}
      {openModal === 'deleteUser' && (
        <DeleteUserModal
          user={selectedUser}
          onClose={() => setOpenModal(null)}
        />
      )}
    </section>
  )
}
