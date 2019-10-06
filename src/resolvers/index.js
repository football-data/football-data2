import { GraphQLDateTime } from 'graphql-iso-date';

import competition from './queries/competition';
import competitions from './queries/competitions';
import country from './queries/country';
import countries from './queries/countries';
import season from './queries/season';
import seasons from './queries/seasons';
import stadium from './queries/stadium';
import stadiums from './queries/stadiums';
import team from './queries/team';
import teams from './queries/teams';

import addCountry from './mutations/addCountry';
import addCompetition from './mutations/addCompetition';

export default {
  DateTime: GraphQLDateTime,
  Query: {
    competition: async (root, args) => competition(args),
    competitions: async (root, args) => competitions(args),
    country: async (root, args) => country(args),
    countries: async (root, args) => countries(args),
    season: async (root, args) => season(args),
    seasons: async (root, args) => seasons(args),
    stadium: async (root, args) => stadium(args),
    stadiums: async (root, args) => stadiums(args),
    team: async (root, args) => team(args),
    teams: async (root, args) => teams(args),
  },
  Mutation: {
    addCountry: async (root, args) => addCountry(args),
    addCompetition: async (root, args) => addCompetition(args),
  },
};
