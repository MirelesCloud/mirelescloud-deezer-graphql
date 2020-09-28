import gql from 'graphql-tag'

export const QUERY_ALBUM = gql`
  query AlbumDetail($id: ID!) {
    album(id: $id) {
      id
      title
      cover
      cover_big
      cover_xl
      nb_tracks
      label
      rating
      fans
      release_date
      artist {
        id
        name
        picture
      }
      tracks {
        id
        title 
        preview
        duration
      }
    }
  }
  `