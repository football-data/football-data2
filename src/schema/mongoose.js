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
    type: {
      type: String,
      enum: ['LEAGUE', 'CUP'],
    },
    country: { type: Schema.Types.ObjectId, ref: 'Country' },
  },
  { timestamps: true },
);

const Competition = mongoose.model('Competition', CompetitionSchema);

const SeasonSchema = Schema(
  {
    season: String,
    start: Date,
    end: Date,
    competition: { type: Schema.Types.ObjectId, ref: 'Competition' },
    teams: [{ type: Schema.Types.ObjectId, ref: 'Team' }],
  },
  { timestamps: true },
);

const Season = mongoose.model('Season', SeasonSchema);

const TeamSchema = Schema(
  {
    name: String,
    shortName: String,
    code: String,
    country: { type: Schema.Types.ObjectId, ref: 'Country' },
    stadium: { type: Schema.Types.ObjectId, ref: 'Stadium' },
  },
  { timestamps: true },
);

const Team = mongoose.model('Team', TeamSchema);

const StadiumSchema = Schema(
  {
    name: String,
    popularName: String,
    city: String,
    country: { type: Schema.Types.ObjectId, ref: 'Country' },
  },
  { timestamps: true },
);

const Stadium = mongoose.model('Stadium', StadiumSchema);

const MatchSchema = Schema(
  {
    round: String,
    date: Date,
    homeTeam: { type: Schema.Types.ObjectId, ref: 'Team' },
    awayTeam: { type: Schema.Types.ObjectId, ref: 'Team' },
    homeTeamScore: Number,
    awayTeamScore: Number,
    stadium: { type: Schema.Types.ObjectId, ref: 'Stadium' },
  },
  { timestamps: true },
);

const Match = mongoose.model('Match', MatchSchema);

export { Country, Competition, Season, Team, Stadium, Match };
