import { gql } from 'apollo-server-lambda';

export default gql`
  type Competition {
    name: String
  }

  input CompetitionInput {
    name: String
  }

  type CompetitionConnection {
    totalCount: Int!
    pageInfo: PageInfo!
    nodes: [Competition]!
  }
`;
