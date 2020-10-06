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
} from '../../Styles'
import { Modal } from '../Modals/Modal'
import {useModal} from '../Modals/useModal'
import Track from '../Track'
import Album from '../Album/Index'
import Artist from '../Artist/Index'
import Like from '../LikeButton'

export interface OwnProps {
  handleId: (newId: string) => void
}
interface Props extends OwnProps {
  data: ChartListQuery;
}

const ChartList: React.FC<Props> = ({ data, handleId }) => {
  console.log(data?.chart?.artists)
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
              explicit={track?.explicit!}
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
              <Artists 
              id={artist?.id!} 
              name={artist?.name!} 
              picture_big={artist?.picture!}
              position={artist?.position!} 
              handleId={handleId}/>
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
            <Card key={album.id!}>
              <Albums
                id={album?.id!}
                title={album?.title!}
                cover={album?.cover!}
                artist={album?.artist?.name!}
                handleId={handleId}
              />
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
  preview: string;
  explicit: boolean;
}

const Tracks: React.FC<ITracks> = ({ id, title, artist, picture, preview, explicit, handleId }) => {
  const { isShown, toggle } = useModal()
  return (
    <>
      <CardImage src={picture} alt={title} onClick={toggle}/>
      <CardBody >
        <CardText onClick={() => handleId(id)}>{title}</CardText>
        <Modal isShown={isShown} hide={toggle} modalContent={
          <Track id={id}/>} />
      </CardBody>
      <CardFooter>By: {artist!} <Like/></CardFooter>
    </>
  )
}

interface IAlbums extends OwnProps {
  id: string,
  title: string,
  cover: string,
  artist: string,
}

const Albums: React.FC<IAlbums> = ({ id, title, cover, artist, handleId }) => {
  const { isShown, toggle } = useModal()
  return (
    <>
      <CardImage src={cover} alt={title} onClick={toggle}/>
      <CardBody>
        <CardText onClick={() => handleId(id)}>{title}</CardText>
        <Modal isShown={isShown} hide={toggle} modalContent={
          <Album id={id}/>} />
      </CardBody>
      <CardFooter>By: {artist} <Like/></CardFooter>
    </>
  )
}

interface IArtist extends OwnProps {
  id: string,
  name: string,
  picture_big: string,
  position: number,
}

const Artists: React.FC<IArtist> = ({id, name, picture_big, position, handleId}) => {
  const { isShown, toggle } = useModal()
  return (
    <>
      <CardImage src={picture_big} alt={name} onClick={toggle}/>
      <CardBody>
        <CardText onClick={() => handleId(id)}>{name}</CardText>
        <Modal isShown={isShown} hide={toggle} modalContent={
          <Artist id={id}/>} />
      </CardBody>
        <CardFooter>Position: {position} <Like/></CardFooter>
    </>
  )
}