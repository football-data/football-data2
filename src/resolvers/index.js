import { GraphQLDateTime } from 'graphql-iso-date';

import countries from './queries/countries';

import addCountry from './mutations/addCountry';

export default {
  DateTime: GraphQLDateTime,
  Query: {
    countries: async (root, args) => countries(args),
  },
  Mutation: {
    addCountry: async (root, args) => addCountry(args),
  },
};
