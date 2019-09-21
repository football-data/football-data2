import { gql } from 'apollo-server-lambda';

import country from './country';
import competition from './competition';

export default gql`
  scalar DateTime

  ${country}
  ${competition}

  type Query {
    country(id: ID!): Country!
    countries: [Country!]!
    competition(id: ID!): Competition!
    competitions: [Competition!]!
  }

  type Mutation {
    addCountry(input: CountryInput!): Country!
    addCompetition(input: CompetitionInput!): Competition!
  }
`;
