import express from 'express';
import questionnaireModel from '../../model/questionnaire';
import questionnaireController from '../../controller/questionnaire';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const questionareParams = req.body;
    const questionniare = await questionnaireController.createQuestionnaire({
      questionareParams,
      questionnaireModel,
    });
    res.status(200).json({ data: questionniare });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    console.log(req.params);
    const questionnaireId = req.params.id;
    const result = await questionnaireController.getQuestionnaireById({
      questionnaireId,
      questionnaireModel,
    });
    if (result) {
      res.status(200).json({ data: result });
    } else {
      res.status(404).json({ message: 'questionnaire not found' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

export default router;
