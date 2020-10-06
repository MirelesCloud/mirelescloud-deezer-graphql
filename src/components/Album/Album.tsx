import React, { useState, useEffect } from 'react'
import { AlbumDetailQuery } from '../../generated/graphql'
import { formatNum, minutes } from '../../AuxFunction'
import {
  ModalWrapper, 
  ModalContainer,
  ModalContent,
  ModalHeader,
  ModalText,
  ModalTextSm,
  Image,
  Row,
  Column,
  CategoryHeader,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Duration,
  Preview,
  PlaySmall,
  PauseSmall,
  ExplicitCell,
} from '../../Styles'

interface Props {
  data: AlbumDetailQuery
}

const Album: React.FC<Props> = ({ data }) => {
  const { 
    title, 
    cover_big, 
    artist, 
    label, 
    release_date, 
    tracks, 
    fans, 
    nb_tracks } = data?.album!
  return (
    <ModalWrapper>
      <ModalContainer>
        <ModalContent>
          <Row>
            <Column>
              <Image src={cover_big!} alt={title!}/>
            </Column>
            <Column>
              <ModalHeader>{title}</ModalHeader>
              <ModalText>By: {artist?.name}</ModalText>
              <br/>
              <ModalTextSm>Label: {label}</ModalTextSm>
              <ModalTextSm>Rel.: {release_date}</ModalTextSm>
              <ModalTextSm>Tracks: {nb_tracks}</ModalTextSm>
              <ModalTextSm>Fans: {formatNum(fans!)}</ModalTextSm>
            </Column>
          </Row>
          <hr/>
          <CategoryHeader>Album Tracks</CategoryHeader>
          <Row>
            <Table>
              <TableBody>
                {tracks?.map(track => (
                  <TableRow key={track?.id}>
                    <TrackPreview 
                      title={track?.title!} 
                      duration={track?.duration!} 
                      preview={track?.preview!}
                      explicit={track?.explicit!} 
                    />
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Row>
        </ModalContent>
      </ModalContainer>
    </ModalWrapper>
  )
}

interface ITrackPreview {
  title: string;
  duration: number;
  preview: string;
  explicit: boolean
}

const TrackPreview: React.FC<ITrackPreview> = ({ title, duration, preview, explicit}) => {
  const [audio] = useState(new Audio(preview!))
  const [play, setPlay] = useState(false)
  const togglePlay = () => setPlay(!play)

  useEffect(() => {
    play ? audio.play() : audio.pause()
  },
    [play, audio]
  )

  return (
    <>
      <TableCell>{title}</TableCell>
      {explicit ? <ExplicitCell>Explicit</ExplicitCell> : <ExplicitCell></ExplicitCell>}
      <Duration>{minutes(duration)}</Duration>
      <Preview onClick={togglePlay}>
        {play ? <PauseSmall/> : <PlaySmall/>}
      </Preview>
    </>
  )
}

export default Album