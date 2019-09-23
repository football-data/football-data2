import { gql } from 'apollo-server-lambda';

export default gql`
  type Team {
    id: ID!
    name: String
    shortName: String!
    code: String!
    country: Country!
    stadium: Stadium
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  input TeamInput {
    name: String
    shortName: String!
    code: String!
    country: ID!
    stadium: ID
  }
`;
