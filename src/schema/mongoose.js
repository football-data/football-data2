import mongoose from 'mongoose';

const CountrySchema = new mongoose.Schema(
  {
    name: String,
    code: String,
  },
  { timestamps: true },
);

export { CountrySchema };
