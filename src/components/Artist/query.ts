import gql from 'graphql-tag'

export const QUERY_ARTIST = gql`
  query ArtistDetail($id: ID!) {
    artist(id: $id) {
      id
      name
      picture
      nb_album
      nb_fan
    }
  }
`