import { gql } from 'apollo-server-lambda';

export default gql`
  type Country {
    id: ID!
    name: String!
    code: String!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  input CountryInput {
    name: String!
    code: String!
  }
`;
