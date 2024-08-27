import React from 'react'
import { PostForm } from '../components/PostForm'

export const CreatePost = ({ userData }) => {
  console.log('User data: ', userData)

  return (
    <PostForm
      mode='create'
      buttonText='Crear'
    />
  )
}
