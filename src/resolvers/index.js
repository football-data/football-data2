import { GraphQLDateTime } from 'graphql-iso-date';

import country from './queries/country';
import countries from './queries/countries';
import competition from './queries/competition';
import competitions from './queries/competitions';
import team from './queries/team';
import teams from './queries/teams';

import addCountry from './mutations/addCountry';
import addCompetition from './mutations/addCompetition';

// scripts

import addTeamsFromJson from './mutations/addTeamsFromJson';

export default {
  DateTime: GraphQLDateTime,
  Query: {
    country: async (root, args) => country(args),
    countries: async (root, args) => countries(args),
    competition: async (root, args) => competition(args),
    competitions: async (root, args) => competitions(args),
    team: async (root, args) => team(args),
    teams: async (root, args) => teams(args),
  },
  Mutation: {
    addCountry: async (root, args) => addCountry(args),
    addCompetition: async (root, args) => addCompetition(args),
    addTeamsFromJson: async (root, args) => addTeamsFromJson(args),
  },
};
