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
      md5_image
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
        md5_image
        cover_medium
        cover_big
      }
    }
  }
`