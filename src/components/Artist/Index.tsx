import React, { useEffect} from 'react'
import { useArtistDetailQuery } from '../../generated/graphql'
import Artist from './Artist'
import ModalSpinner  from '../ModalSpinner'
import { Row } from '../../Styles'


interface OwnProps {
  id: string
}
const ArtistContainer = ({id}: OwnProps) => {
  const {data, error, loading, refetch }  = useArtistDetailQuery({
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
    return <div>Error</div>
  }
  console.log(data)
  return <Artist data={data}/>
}

export default ArtistContainer
