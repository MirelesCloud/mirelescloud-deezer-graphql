import gql from 'graphql-tag'

export const TRACK_QUERY = gql`
  query Track($id: ID!) {
   track(id: $id) {
    id
    title
    duration
    rank
    release_date
    preview

   }
  }
`