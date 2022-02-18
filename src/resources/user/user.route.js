import express from 'express';
import crudUserControllers from './user.controller';

const router = express.Router();

router.post('/', crudUserControllers.createUser);
router.post('/:id/questionarie', crudUserControllers.addQuestionarie);

//router.get('/:id', crudUserControllers.getUser);

export default router;
