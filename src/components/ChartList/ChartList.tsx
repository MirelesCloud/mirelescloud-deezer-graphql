import * as React from 'react'
import { ChartListQuery } from '../../generated/graphql'
import { Link } from 'react-router-dom'
import { 
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


interface Props {
  data: ChartListQuery;
}



const ChartList: React.FC<Props> = ({ data }) => {
  return (
    <div>
      <h3>Top Tracks</h3>
      <ContentWrapper>
        {!!data.chart &&
          data.chart.tracks!.map((track) => 
          !!track && (
            <Card key={track.id!}>
              <CardImage src={track?.artist?.picture!} alt={track?.title as any}/>
              <CardBody >
                <CardText>{track?.title}</CardText>
                <CardFooter>By {track?.artist?.name}</CardFooter>
                <audio className="title"><source src={track?.preview!}/></audio>
                <Link to={`track/${track.id}`}>Detail</Link>
                
              </CardBody>
              
            </Card>
          )
          )}
      </ContentWrapper>
      <h3>Top Artists</h3>
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
      <h3>Top Albums</h3>
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