import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../providers/UserProvider'
import { getRoleName } from '../../utilities/roleUtils'
import { DeleteUserModal } from '../../components/DeleteUserModal'
import { CreateUserModal } from '../../components/CreateUserModal'
import { UpdateUserModal } from '../../components/UpdateUserModal'

export const UsersManagment = () => {
  const { getAllUsers } = useContext(UserContext)

  const [allUsers, setAllUsers] = useState([])
  console.log('All users: ', allUsers)

  const [selectedUser, setSelectedUser] = useState(null)
  console.log('Selected user: ', selectedUser)

  const [openModal, setOpenModal] = useState(false)
  console.log('Modal state: ', openModal)

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
  }, [openModal, getAllUsers])

  const handleCheckboxChange = (user) => {
    setSelectedUser((prevSelectedUser) => {
      if (prevSelectedUser && prevSelectedUser.id === user.id) {
        return null
      }
      return user
    })
  }

  const closeModal = () => {
    setSelectedUser(null)
    setOpenModal(null)
  }

  return (
    <section className='user-managment-contet'>
      <div>
        <button onClick={() => setOpenModal('createUser')}>
          Nuevo Usuario
        </button>
        {selectedUser !== null ? (
          <>
            <button onClick={() => setOpenModal('updateUser')}>
              Actualizar Usuario
            </button>
            <button onClick={() => setOpenModal('deleteUser')}>
              Eliminar Usuario
            </button>
          </>
        ) : (
          <>
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
      <CreateUserModal
        isOpen={openModal === 'createUser'}
        onClose={closeModal}
      />
      {selectedUser && (
        <>
          <DeleteUserModal
            isOpen={openModal === 'deleteUser'}
            user={selectedUser}
            onClose={closeModal}
          />
          <UpdateUserModal
            isOpen={openModal === 'updateUser'}
            user={selectedUser}
            onClose={closeModal}
          />
        </>
      )}
    </section>
  )
}
