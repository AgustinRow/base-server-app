import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const questionarieSchema = new mongoose.Schema({
  date: { type: Date },
  sleep: {
    quality: {
      type: String,
      enum: ['terrible', 'bad', 'neutral', 'satisfied', 'excelent'],
      required: true,
    },
    quantity: {
      goToBed: { type: String, required: true },
      wakeUp: { type: String, required: true },
      total: { type: Number, required: true },
    },
  },
  trainning: {
    time: String,
  },
  organizationTime: {
    tool: {
      type: [String],
      enum: ['app', 'mobile', 'schedule', 'notes'],
    },
  },
  screenUsage: {
    beforeSleep: {
      type: [String],
      enum: ['mobile', 'TV', 'tablet', 'computer'],
    },
    socialNetworkVideoGames: Boolean,
  },
  someNew: { type: String },
  drinks: {
    frecuency: {
      water: Number,
      sugaryDrinks: Number,
      energyDrinks: Number,
      caffeinatedDrinks: Number,
      alocohol: Number,
    },
  },
});

questionarieSchema.plugin(mongoosePaginate);

const questionnaireModel = mongoose.model('questionnaire', questionarieSchema);
export default questionnaireModel;
