import { gql } from 'apollo-server-lambda';

import country from './country';
import competition from './competition';
import season from './season';
import team from './team';
import stadium from './stadium';

export default gql`
  scalar DateTime

  ${country}
  ${competition}
  ${season}
  ${team}
  ${stadium}

  type Query {
    country(id: ID!): Country!
    countries: [Country!]!
    competition(id: ID!): Competition!
    competitions: [Competition!]!
    team(id: ID!): Team!
    teams: [Team!]!
  }

  type Mutation {
    addCountry(input: CountryInput!): Country!
    addCompetition(input: CompetitionInput!): Competition!
    addTeamsFromJson(teams: [TeamInput]): String
  }
`;
