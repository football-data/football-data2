import mongoose from 'mongoose';

import { CountrySchema } from '../schema/mongoose';

let connected;

const connectDb = async () => {
  try {
    if (connected) return;
    const { ATLAS_URL } = process.env;

    await mongoose.connect(ATLAS_URL, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
    connected = true;
    mongoose.connection.on('disconnected', () => {
      connected = false;
    });
  } catch (error) {
    throw Error(error);
  }
};

const CountriesCollection = mongoose.model('countries', CountrySchema);

export { connectDb, CountriesCollection };
