import mongoose from 'mongoose';

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

export { connectDb };
