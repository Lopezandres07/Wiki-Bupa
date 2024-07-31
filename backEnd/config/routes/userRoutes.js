import express from 'express'
import {
  newUser,
  loginUser,
  updateUserProfile,
  deleteUser,
  getUsersController,
} from '../../src/API/v1/controllers/userController.js'

const router = express.Router()

router.get('/users', getUsersController)
router.post('/register', newUser)
router.post('/login', loginUser)
router.put('/user/:id', updateUserProfile)
router.delete('/user/:id', deleteUser)

export default router
