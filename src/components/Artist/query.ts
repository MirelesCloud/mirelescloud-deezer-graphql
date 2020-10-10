import gql from 'graphql-tag'

export const QUERY_ARTIST = gql`
  query ArtistDetail($id: ID!) {
    artist(id: $id) {
      id
      name
      picture
      picture_big
      nb_album
      nb_fan
      tracklist {
        id
        title
        preview
        duration
        explicit
        album {
          title
          cover
        }
      }
    }
  }
`