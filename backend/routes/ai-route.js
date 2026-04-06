import express from 'express'
import { protect } from '../middlewares/auth-middleware.js';
import {
generateInterviewQuestions,
generateConceptExplanation,
getSessionById
} from '../controller/ai-controller.js'

const router=express.Router();

router.post('/generate-questions',protect,generateInterviewQuestions)
router.post('/generate-explanation',protect,generateConceptExplanation)
router.post('/:id',protect,getSessionById)

export default router;