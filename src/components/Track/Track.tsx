import React from 'react'
import { TrackInfoQuery } from '../../generated/graphql'

interface Props {
  data: TrackInfoQuery
}
const Track: React.FC<Props> = ({ data  }) => {
  console.log(data)
  return (
  <div>{data?.track?.title}</div>
  )
}

export default Track