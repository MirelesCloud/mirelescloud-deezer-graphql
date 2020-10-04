import React, { useState, useEffect } from 'react'
import { ArtistDetailQuery } from '../../generated/graphql'
import { formatNum, minutes } from '../../AuxFunction'
import {
  ModalWrapper, 
  ModalContainer,
  ModalContent,
  ModalHeader,
  ModalTextSm,
  Image,
  Row,
  Column,
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
  data: ArtistDetailQuery
}

const Artist: React.FC<Props> = ({ data }) => {
  console.log(data)
  const { name, picture_big, nb_album, nb_fan, tracklist } = data?.artist!
  console.log(data)
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
          <Row>
            <Table>
              <TableBody>
                {tracklist!.map(track => (
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

export default Artist