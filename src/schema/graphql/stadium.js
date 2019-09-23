import { gql } from 'apollo-server-lambda';

export default gql`
  type Stadium {
    id: ID!
    name: String!
    popularName: String!
    city: String!
    country: Country!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  input StadiumInput {
    name: String
    popularName: String!
    city: String!
    country: ID!
  }
`;
