import { User } from './user.model';

const createUser = async (req, res) => {
  try {
    const { body } = req;
    const doc = await User.create({ ...body.data });
    res.status(200).json({ data: doc });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const addQuestionarie = async (req, res) => {
  try {
    const { params, body } = req;
    console.log(params.id);
    console.log(body);
    const user = await User.findOneAndUpdate(
      { _id: params.id },
      { $push: { questionaries: body.data } },
    );
    console.log(user);
    //user.questionaries.push(body.data);
    //user.save();
    res.status(200).json({ data: user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const getQuestionariesByUser = async () => {};

const crudUserController = {
  createUser,
  addQuestionarie,
  getQuestionariesByUser,
};

export default crudUserController;
