import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { DeletePostModal } from '../../components/DeletePostModal'

export const PostsManagement = () => {
  const [openModal, setOpenModal] = useState(false)
  console.log('Modal state: ', openModal)

  const [selectedPost, setSelectePost] = useState(null)
  console.log('Selected post: ', selectedPost)

  const navigate = useNavigate()

  const handleCheckboxChange = (post) => {
    setSelectePost((prevSelectePost) => {
      if (prevSelectePost && prevSelectePost.id === post.id) {
        return null
      }
      return post
    })
  }

  const handleCreatePost = () => {
    navigate('/create-post')
  }

  const closeModal = () => {
    setSelectePost(null)
    setOpenModal(null)
  }

  return (
    <section className='user-managment-contet'>
      <div>
        <button onClick={handleCreatePost}>Crear Publicaión</button>
        {selectedPost !== null ? (
          <>
            <button onClick={() => setOpenModal('deletePost')}>
              Eliminiar Publicación
            </button>
            <button onClick={() => setOpenModal('postState')}>
              Vista Previa
            </button>
          </>
        ) : (
          <>
            <button disabled>Eliminar Publicación</button>
            <button disabled>Vista Previa</button>
          </>
        )}
      </div>
      <div>
        <table className='users-table'>
          <thead>
            <tr>
              <th>Título</th>
              <th>Fecha de creación</th>
              <th>Área</th>
              <th>Categoría</th>
              <th>Creado por</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
      {selectedPost && (
        <>
          <DeletePostModal
            isOpen={openModal === 'deletePost'}
            post={selectedPost}
            onClose={closeModal}
          />
        </>
      )}
    </section>
  )
}
