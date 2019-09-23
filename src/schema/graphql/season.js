import { gql } from 'apollo-server-lambda';

export default gql`
  type Season {
    id: ID!
    season: String!
    start: DateTime!
    end: DateTime!
    competition: Competition!
    teams: [Team!]!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  input SeasonInput {
    season: String!
    start: DateTime!
    end: DateTime!
    competition: ID!
  }
`;
