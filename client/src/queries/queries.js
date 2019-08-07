import { gql } from 'apollo-boost';

const getAuthorsQuery = gql`
  {
    authors{
      name
    }
  }
`

const getBooksQuery = gql`
  {
    books{
      name
    }
  }
`

export { getAuthorsQuery, getBooksQuery };