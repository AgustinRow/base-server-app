/* eslint-disable no-undef */
import questionnaireController from './questionnaire';
questionnaireController.getQuestionnaireById;

describe('get questionaire by id', () => {
  test('given a valid id  it should return that questionnaire', async () => {
    const questionnaireId = '620f9c520af9d420507127cf';
    const questionnaireModel = {
      findById: (id) => ({
        date: '2022-02-16T03:00:00.000Z',
        sleep: {
          quality: 'bad',
          quantity: {
            goToBed: '23:00',
            wakeUp: '06:00',
            total: 7,
          },
        },
        trainning: {
          time: '00:30',
        },
        organizationTime: {
          tool: ['app', 'notes', 'mobile'],
        },
        screenUsage: {
          beforeSleep: ['mobile'],
          socialNetworkVideoGames: true,
        },
        drink: {
          frecuenc: {
            water: 3,
            sugaryDrinks: 0,
            energyDrinks: 0,
            caffeinatedDrinks: 0,
            alocohol: 2,
          },
        },
        _id: id,
      }),
    };
    expect(
      await questionnaireController.getQuestionnaireById({
        questionnaireId,
        questionnaireModel,
      }),
    ).toEqual({
      date: '2022-02-16T03:00:00.000Z',
      sleep: {
        quality: 'bad',
        quantity: {
          goToBed: '23:00',
          wakeUp: '06:00',
          total: 7,
        },
      },
      trainning: {
        time: '00:30',
      },
      organizationTime: {
        tool: ['app', 'notes', 'mobile'],
      },
      screenUsage: {
        beforeSleep: ['mobile'],
        socialNetworkVideoGames: true,
      },
      drink: {
        frecuenc: {
          water: 3,
          sugaryDrinks: 0,
          energyDrinks: 0,
          caffeinatedDrinks: 0,
          alocohol: 2,
        },
      },
      _id: questionnaireId,
    });
  });
  test('given an invalid id  it should throw an error', async () => {
    const questionnaireId = 'invalidId1234';
    const questionnaireModel = {
      findById: () => null,
    };
    expect(
      await questionnaireController.getQuestionnaireById({
        questionnaireId,
        questionnaireModel,
      }),
    ).toBeNull();
  });
});
