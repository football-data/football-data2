import { GraphQLDateTime } from 'graphql-iso-date';

import country from './queries/country';
import countries from './queries/countries';
import competition from './queries/competition';
import competitions from './queries/competitions';

import addCountry from './mutations/addCountry';
import addCompetition from './mutations/addCompetition';

export default {
  DateTime: GraphQLDateTime,
  Query: {
    country: async (root, args) => country(args),
    countries: async (root, args) => countries(args),
    competition: async (root, args) => competition(args),
    competitions: async (root, args) => competitions(args),
  },
  Mutation: {
    addCountry: async (root, args) => addCountry(args),
    addCompetition: async (root, args) => addCompetition(args),
  },
};
