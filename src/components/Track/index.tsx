import React, { useEffect } from 'react'
import { useTrackInfoQuery } from '../../generated/graphql'
import Track from './Track'
import { Row } from '../../Styles'
import ModalSpinner from '../ModalSpinner'

interface OwnProps {
  id: string
}
const TrackContainer = ({id}: OwnProps) => {
  const {data, error, loading, refetch} = useTrackInfoQuery({
    variables: { id: String(id)}
  });

  useEffect(() => {
    refetch();
  }, [id, refetch])

  if (loading) {
    return (
      <Row>
        <ModalSpinner/>
      </Row>
    )
  }

  if (error || !data) {
    return <div>Error :(</div>
  }
  console.log(data)
  return (
    <Track data={data}/>
  )
}

export default TrackContainer