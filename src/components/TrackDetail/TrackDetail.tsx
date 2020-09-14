import * as React from 'react'
import { TrackQuery } from '../../generated/graphql'

interface Props {
  data: TrackQuery
} 

const TrackDetail:  React.FC<Props>= ({data}) => {
  console.log(data)
 
  
  return (
    <div>Track Details</div>
  )
}

export default TrackDetail