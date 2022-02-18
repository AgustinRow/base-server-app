import mongoose from 'mongoose';
const { faker } = require('@faker-js/faker');
import { User } from '../resources/user/user.model';
require('dotenv').config();

async function createUser(User) {
  const userData = {
    email: faker.internet.email(faker.name.firstName(), faker.name.lastName()),
    username: faker.internet.userName(),
  };
  console.log(userData);
  const user = await User.create(userData);
  console.log(user.id);
  return user.id;
}

async function seedDb() {
  try {
    await mongoose.connect(process.env.URL_ATLAS);

    /* await mongoose.connection.db.dropCollection(
      'users',
      function (err, result) {
        console.log(result);
      }, 
    );*/
    for (let i = 0; i < 10; i++) {
      /*const userData = {
        email: faker.internet.email(
          faker.name.firstName(),
          faker.name.lastName(),
        ),
        username: faker.internet.userName(),
      };
      console.log(userData);
      const user = await User.create(userData);
      console.log(user.id); */

      const userId = await createUser(User);
      for (let j = 0; j < 180; j++) {
        const questionarie = {
          date: faker.date.soon(j, '2022-01-01T00:00:00.000Z'),
          sleep: {
            quality: 'regular',
            quantity: {
              goToBed: '23:00',
              wakeUp: '00:06',
              total: 7,
            },
          },
          trainning: {
            time: '00:30',
          },
          organizationTime: {
            tool: ['app', 'mobile', 'schedule'],
          },
          screenUsage: {
            beforeSleep: ['mobile', 'TV', 'tablet', 'computer'],
            socialNetworkVideoGames: true,
          },
          drinks: {
            frecuency: {
              water: 3,
              sugaryDrinks: 0,
              energyDrinks: 0,
              caffeinatedDrinks: 0,
              alocohol: 2,
            },
          },
        };
        console.log(questionarie);
        await User.findByIdAndUpdate(
          { _id: userId },
          { $push: { questionaries: questionarie } },
        );
      }
    }
  } catch (err) {
    console.error(err);
  }
}

seedDb();
