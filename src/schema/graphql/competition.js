import { gql } from 'apollo-server-lambda';

export default gql`
  enum CompetitionType {
    LEAGUE
    CUP
  }

  type Competition {
    id: ID!
    name: String!
    type: CompetitionType!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  input CompetitionInput {
    name: String!
    type: CompetitionType!
    country: ID!
  }
`;
