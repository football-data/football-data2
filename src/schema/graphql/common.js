import { gql } from 'apollo-server-lambda';

export default gql`
  type PageInfo {
    hasNextPage: Boolean!
    hasPreviousPage: Boolean!
  }

  input SortInput {
    field: String
    direction: String
  }
`;
