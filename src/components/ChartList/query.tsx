import gql from 'graphql-tag'

export const QUERY_CHART_LIST = gql`
  query ChartList {
    chart {
      tracks {
        id
        title 
        artist {
          picture
          name
          
        }
      }

      artists {
        id
        name
        picture
        position
      }

      albums {
        id
        title
        cover
        artist {
          name
        }
      }
    }
  }
`