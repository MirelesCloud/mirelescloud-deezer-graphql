import React, { useState, useEffect } from 'react'
import { AlbumDetailQuery } from '../../generated/graphql'
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
  Table,
  TableBody,
  TableRow,
  TableCell,
  Duration,
  Preview,
  PlaySmall,
  PauseSmall,
} from '../../Styles'

interface Props {
  data: AlbumDetailQuery
}
const Album: React.FC<Props> = ({ data }) => {
  const { title, cover_big, artist, label, release_date, tracks } = data?.album!
 
  const [audio, setAudio] = useState(new Audio(""))
  const [play, setPlay] = useState(false)
  const togglePlay = () => setPlay(!play)

  useEffect(() => {
    play ? audio.play() : audio.pause()
  },
    [play, audio]
  )

  function minutes(time: number) {
    let min = Math.floor(time/60);
    let sec = time - min * 60;
    
    return min + " : " + sec
  }

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
              <ModalTextSm>Rel.:{release_date}</ModalTextSm>
            </Column>
          </Row>
          <hr/>
          <Row>
            <Table>
              <TableBody>
                {tracks?.map(track => (
                  <TableRow key={track?.id}>
                    <TableCell>{track?.title}</TableCell>
                    <Duration>{minutes(track?.duration!)}</Duration>
                    <Preview  onClick={() => {
                      setAudio(new Audio(track?.preview!));
                      togglePlay();
                    }}>
                        {play ? <PauseSmall/> : <PlaySmall/>}
                    </Preview>
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

export default Album