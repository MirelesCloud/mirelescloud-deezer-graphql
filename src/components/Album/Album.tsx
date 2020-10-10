import React, { useState } from 'react'
import { AlbumDetailQuery } from '../../generated/graphql'
import { formatNum, minutes } from '../../AuxFunction'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
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
  ModalCategory,
  TableContainer,
  Table,
  TableHeader,
  TableRow,
  TableCell,
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
          <ModalCategory>Album Tracks</ModalCategory>
          <Row>
            <TableContainer>
              <Table>
                <thead>
                  <TableRow>
                  <TableHeader scope="col" style={{width: "35%"}}>Title</TableHeader>
                    <TableHeader scope="col" style={{width: "10%"}}></TableHeader>
                    <TableHeader scope="col" style={{width: "10%"}}>Duration</TableHeader>
                    <TableHeader scope="col">Preview</TableHeader>
                  </TableRow>
                </thead>
                <tbody>
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
                </tbody>
              </Table>
            </TableContainer>
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
  const [play, setPlay] = useState(false)
  const togglePlay = () => setPlay(!play)

  return (
    <>
      <TableCell data-label="Title">{title}</TableCell>
      {explicit ? <TableCell data-label="">Explicit</TableCell> : <TableCell></TableCell>}
      <TableCell data-label="Duration">{minutes(duration)}</TableCell>
      <TableCell data-label="Preview">
        <AudioPlayer style={{transform: "scale(0.7)"}}
          onPlay={togglePlay}
          src={preview!}
          showJumpControls={false}
          layout={"horizontal"}
          customAdditionalControls={[]}
        />
      </TableCell>
    </>
  )
}

export default Album