import React from 'react'

export const UserModal = ({ title, isOpen, children }) => {
  if (!isOpen) return false

  return (
    <article className='modal-overlay'>
      <div>
        <h2>{title}</h2>
        <div>{children}</div>
      </div>
    </article>
  )
}
