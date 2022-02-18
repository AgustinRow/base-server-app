import { Questionarie } from './questionarie.model';

const createQuestionarie = async (req, res) => {
  try {
    const { body } = req;
    console.log(body.data);
    const doc = await Questionarie.create({ ...req.body.data });
    res.status(200).json({ data: doc });
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: 'Bad Request' });
  }
};

const getQuestionarie = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const questionaries = await Questionarie.find({ user: id });
    res.status(200).json({ data: questionaries });
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: 'Bad Request' });
  }
};

const crudQuestionarieControllers = {
  createQuestionarie,
  getQuestionarie,
};

export default crudQuestionarieControllers;
