const createQuestionnaire = async ({
  questionareParams,
  questionnaireModel,
}) => {
  const result = await questionnaireModel.create(questionareParams);
  await result.save();
  return result;
};

const getQuestionnaireById = async ({
  questionnaireId,
  questionnaireModel,
}) => {
  return await questionnaireModel.findById(
    questionnaireId,
    'date sleep trainning organizationTime screenUsage drinks _id',
  );
};

const getAllQuestionnaries = async ({
  questionnaireModel,
  questionnairePage,
  questionnarieLimit,
}) => {
  return questionnaireModel.paginate(
    {},
    { limit: questionnarieLimit, page: questionnairePage },
  );
};

const questionnaireController = {
  createQuestionnaire,
  getQuestionnaireById,
  getAllQuestionnaries,
};

export default questionnaireController;
