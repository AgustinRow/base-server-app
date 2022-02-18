const createQuestionnaire = async ({
  questionareParams,
  questionnaireModel,
}) => {
  return await questionnaireModel.create(questionareParams);
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

const questionnaireController = {
  createQuestionnaire,
  getQuestionnaireById,
};

export default questionnaireController;
