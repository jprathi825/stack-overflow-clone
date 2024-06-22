import express from 'express'

import { AskQuestion,getAllQuestions, voteQuestion ,deleteQuestion} from '../controllers/Questions.js'
import auth from '../middlewares/auth.js'
const router =express.Router()

router.post('/Ask', AskQuestion)
router.get('/Get' ,getAllQuestions)
router.delete('/delete/:id', deleteQuestion);
router.patch('/vote/:id',voteQuestion);

export default router