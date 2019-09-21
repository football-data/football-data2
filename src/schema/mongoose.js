import mongoose from 'mongoose';

const { Schema } = mongoose;

const CountrySchema = Schema(
  {
    name: String,
    code: String,
  },
  { timestamps: true },
);

const Country = mongoose.model('Country', CountrySchema);

const CompetitionSchema = Schema(
  {
    name: String,
    type: String,
    country: { type: Schema.Types.ObjectId, ref: 'Country' },
  },
  { timestamps: true },
);

const Competition = mongoose.model('Competition', CompetitionSchema);

export { CountrySchema, Country, CompetitionSchema, Competition };
