import express from 'express'
 import auth from '../middlewares/auth.js';
import {login, signup} from '../controllers/auth.js'
import { getAllUsers,updateProfile } from '../controllers/users.js';
import {sendEmail} from '../controllers/sendEmail.js'
const router = express.Router();

router.post('/login', login)
router.post('/signup', signup)
router.get('/getAllUsers',getAllUsers)
router.patch('/update/:id',auth, updateProfile)
router.post('/sendEmail',sendEmail)
export default router