import express from 'express';
import crudQuestionarieControllers from './questionarie.controller';

const router = express.Router();

router.post('/', crudQuestionarieControllers.createQuestionarie);
router.get('/:id', crudQuestionarieControllers.getQuestionarie);

export default router;
