import * as React from 'react'
import TrackDetail from './TrackDetail'
import { useTrackQuery } from '../../generated/graphql'

const TrackContainer = ({match}: any) => {
  const {data, loading, error} = useTrackQuery({
    variables: {
      id: match.params.id
    }
  })

  if(loading) {
    return <div>Loading...</div>
  }
  if(error || !data) {
    return <div>Error :(</div>
  }
  console.log(data)
  return <div><TrackDetail data={data}/></div>
}

export default TrackContainer