import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: { type: String },
  questionaries: [
    {
      date: Date,
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
      drinks: {
        frecuency: {
          water: Number,
          sugaryDrinks: Number,
          energyDrinks: Number,
          caffeinatedDrinks: Number,
          alocohol: Number,
        },
      },
    },
    { timestamps: true },
  ],
});

export const User = mongoose.model('user', userSchema);
