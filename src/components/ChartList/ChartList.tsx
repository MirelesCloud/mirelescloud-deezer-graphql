import React from 'react'
import { ChartListQuery } from '../../generated/graphql'
import { 
  CategoryHeader,
  ContentWrapper,
  Card, 
  CardBody, 
  CardImage,
  CardText,
  CardFooter,
  /* ModalWrapper, 
  ModalContainer,
  ModalContent,
  ModalHeader,
  ModalText,
  Row,
  Column,
  CloseModal */
} from '../../Styles'
import { Modal } from '../Modals/Modal'
import {useModal} from '../Modals/useModal'
import Track from '../Track'

export interface OwnProps {
  handleId: (newId: string) => void
}
interface Props extends OwnProps {
  data: ChartListQuery;
}



const ChartList: React.FC<Props> = ({ data, handleId }) => {
  
  return (
    <div>
      <CategoryHeader>Top Tracks</CategoryHeader>
      <ContentWrapper>
        {!!data.chart &&
          data.chart.tracks!.map((track) => 
          !!track && (
           
              <Card key={track.id!} >
                
              <Tracks
              id={track?.id!}
              title={track?.title!} 
              artist={track?.artist?.name!} 
              picture={track?.artist?.picture!}
              preview={track?.preview!}
              handleId={handleId}
              
              />
             
            </Card>
            
            
          )
          )}
      </ContentWrapper>
      <hr/>
      <CategoryHeader>Top Artists</CategoryHeader>
      <ContentWrapper>
        {!!data.chart &&
          data.chart.artists!.map((artist) => 
          !!artist && (
            <Card key={artist?.id!}>
              <CardImage src={artist?.picture!} alt={artist?.name as any}/>
              <CardBody >
                <CardText>{artist?.name}</CardText>
                <CardFooter>No {artist?.position}</CardFooter>
              </CardBody>
            </Card>
          )
          )}
      </ContentWrapper>
      <hr/>
      <CategoryHeader>Top Albums</CategoryHeader>
      <ContentWrapper>
        {!!data.chart &&
          data.chart.albums!.map((album) => 
          !!album && (
            <Card key={album?.id!}>
              <CardImage src={album?.cover!} alt={album?.title as any}/>
              <CardBody >
                <CardText>{album?.title}</CardText>
                <CardFooter>By {album?.artist?.name}</CardFooter>
              </CardBody>
            </Card>
          )
          )}
      </ContentWrapper>
    </div>
  )
}

export default ChartList

interface  ITracks extends OwnProps {
  id: string;
  title: string;
  artist: string;
  picture: string;
  preview: string
  
}

const Tracks: React.FC<ITracks> = ({ id, title, artist, picture, preview, handleId }) => {
  const { isShown, toggle } = useModal()
 

  return (
    <>
      <CardImage src={picture} alt={title} onClick={toggle}/>
      <CardBody >
        <CardText onClick={() => handleId(id)}>{title}</CardText>
        <CardFooter>By {artist!}</CardFooter>
        <Modal isShown={isShown} hide={toggle} modalContent={
          <Track id={id}/>} />
      </CardBody>
    </>
  )
}
/* 
interface  ITracks {
  title: string;
  artist: {
    name: string;
    picture: string;
  }
  
}

const Tracks: React.FC<ITracks> = ({ title, artist }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <CardImage src={artist.picture} alt={artist.name}/>
      <CardBody onClick={() => setIsModalOpen(true)}>
        <CardText>{title}</CardText>
        <CardFooter>by {artist.name}</CardFooter>
      </CardBody>
      
      {isModalOpen &&
        <Modal onClose={() => setIsModalOpen(false)}>
          <ModalWrapper>
          <CloseModal><span aria-hidden="true">&times;</span></CloseModal>
            <ModalContainer>
              <ModalContent>
                <ModalHeader>{title}</ModalHeader>
              </ModalContent>
            </ModalContainer>
          </ModalWrapper>
        </Modal>
      }
    </>
  )

} */