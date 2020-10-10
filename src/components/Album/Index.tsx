import React, { useEffect } from 'react'
import { useAlbumDetailQuery } from '../../generated/graphql'
import Album from './Album'
import { Row } from '../../Styles'
import ModalSpinner from '../ModalSpinner'

interface OwnProps {
  id: string
}
const AlbumContainer = ({id}: OwnProps) => {
  const {data, error, loading, refetch }  = useAlbumDetailQuery({
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
    return <div>Error !!!!</div>
  }

  console.log(data)
  return <Album data={data}/>
}

export default AlbumContainer