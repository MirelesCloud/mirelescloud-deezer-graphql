import gql from 'graphql-tag'

export const QUERY_TRACK_PROFILE = gql`
  query TrackInfo($id: ID!) {
    track(id: $id) {
      id
      title
      duration
      preview
      artist {
        id
        name
      }
      album {
        id
        title
        cover
      }
    }
  }
`