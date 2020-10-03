import gql from 'graphql-tag'

export const QUERY_TRACK_PROFILE = gql`
  query TrackInfo($id: ID!) {
    track(id: $id) {
      id
      title
      duration
      release_date
      preview
      rank
      explicit
      artist {
        id
        name
        picture
        picture_medium
        picture_big
      }
      album {
        id
        title
        cover
        cover_big
      }
    }
  }
`