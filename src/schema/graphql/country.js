import { gql } from 'apollo-server-lambda';

export default gql`
  type Country {
    name: String
    code: String
    createdAt: DateTime
    updatedAt: DateTime
  }

  input CountryInput {
    name: String
    code: String
  }

  type CountryConnection {
    totalCount: Int!
    pageInfo: PageInfo!
    nodes: [Country]!
  }
`;
