import { gql } from 'apollo-server-lambda';

import country from './country';
import common from './common';

export default gql`
  scalar DateTime

  ${country}

  ${common}

  type Query {
    countries(limit: Int, skip: Int, sort: SortInput): CountryConnection
  }

  type Mutation {
    addCountry(input: CountryInput): Country!
  }
`;
