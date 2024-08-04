import React from 'react'
import { Modal, Button } from 'flowbite-react'
import { HiOutlineExclamationCircle } from 'react-icons/hi'

export const DeleteUserModal = ({ user, onClose }) => {
  return (
    <>
      <Modal
        show={true}
        size='md'
        popup
        onClose={onClose}
      >
        <Modal.Header />
        <Modal.Body>
          <div className='text-center'>
            <HiOutlineExclamationCircle className='mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200' />
            <h3 className='mb-5 text-lg font-normal text-gray-500 dark:text-gray-400'>
              {`¿Estás seguro que deseas eliminar a ${user.firstname} ${user.lastname}?`}
            </h3>
            <div className='flex justify-center gap-4'>
              <Button
                color='failure'
                onClose={onClose}
              >
                Eliminar
              </Button>
              <Button
                color='gray'
                onClose={onClose}
              >
                Cancelar
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}
