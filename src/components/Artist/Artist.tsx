import React, { useState } from 'react'
import { ArtistDetailQuery } from '../../generated/graphql'
import { formatNum, minutes } from '../../AuxFunction'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import {
  ModalWrapper, 
  ModalContainer,
  ModalContent,
  ModalCategory,
  ModalHeader,
  ModalTextSm,
  Image,
  Row,
  Column,
  TableContainer,
  Table,
  TableHeader,
  TableRow,
  TableCell,
} from '../../Styles'

interface Props {
  data: ArtistDetailQuery
}

const Artist: React.FC<Props> = ({ data }) => {
  const { name, picture_big, nb_album, nb_fan, tracklist } = data?.artist!
  return (
    <ModalWrapper>
      <ModalContainer>
        <ModalContent>
          <Row>
            <Column>
              <Image src={picture_big!} alt={name!}/>
            </Column>
            <Column>
              <ModalHeader>{name}</ModalHeader>
              <ModalTextSm>Fans: {formatNum(nb_fan!)}</ModalTextSm>
              <ModalTextSm>Albums: {nb_album!}</ModalTextSm>
            </Column>
          </Row>
          <hr/>
          <ModalCategory>Artist Tracks</ModalCategory>
          <Row>
            <TableContainer>
              <Table>
                <thead>
                  <TableRow>
                    <TableHeader scope="col" style={{width: "25%"}}>Title</TableHeader>
                    <TableHeader scope="col" style={{width: "25%"}}>Title</TableHeader>
                    <TableHeader scope="col" style={{width: "20%"}}>Album</TableHeader>
                    <TableHeader scope="col" style={{width: "5%"}}></TableHeader>
                    <TableHeader scope="col" style={{width: "10%"}}>Duration</TableHeader>
                    <TableHeader scope="col">Preview</TableHeader>
                  </TableRow>
                </thead>
                <tbody>
                {tracklist!.map(track => (
                    <TableRow key={track?.id}>
                      <TrackPreview 
                        title={track?.title!} 
                        duration={track?.duration!} 
                        preview={track?.preview!}
                        explicit={track?.explicit!}
                        album_title={track?.album?.title!}
                        album_cover={track?.album?.cover!}
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
  explicit: boolean;
  album_title: string;
  album_cover: string;
}

const TrackPreview: React.FC<ITrackPreview> = ({ title, duration, preview, explicit, album_title, album_cover}) => {

  const [play, setPlay] = useState(false)
  const togglePlay = () => setPlay(!play)
  
  return (
    <>
      <TableCell data-label="Title">{title}</TableCell>
      <TableCell data-label="Album">{album_title}</TableCell>
      {explicit ? <TableCell data-label="" style={{fontSize: "0.6em", fontStyle: "oblique"}}>Explicit</TableCell> : <TableCell></TableCell>}
      <TableCell data-label="Duration" >{minutes(duration)}</TableCell>
      <TableCell data-label="Preview" >
        <AudioPlayer style={{transform: "scale(0.7)" }}
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

export default Artist