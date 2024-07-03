import express from 'express'
import {
  newUser,
  loginUser,
  updateUserProfile,
  deleteUser,
} from '../../src/API/v1/controllers/userController'

const router = express.Router()

router.post('/register', newUser)
router.post('/login', loginUser)
router.put('/user/:id', updateUserProfile)
router.delete('/user/:id', deleteUser)

export default router
