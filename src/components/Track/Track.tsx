import React, { useState, useEffect } from 'react'
import { TrackInfoQuery } from '../../generated/graphql'
import {
  ModalWrapper, 
  ModalContainer,
  ModalContent,
  ModalHeader,
  ModalCategory,
  ModalText,
  ModalTextSm,
  Image,
  ImageSmall,
  Row,
  Column,
  PlayContainer,
  Play,
  Pause,
  Explicit,
} from '../../Styles'

interface Props {
  data: TrackInfoQuery
}
const Track: React.FC<Props> = ({ data  }) => {
  console.log(data)
  const { title, preview, release_date, artist, album, explicit } = data?.track!

  const [audio] = useState(new Audio(preview!))
  const [play, setPlay] = useState(false)
  const togglePlay = () => setPlay(!play)
  
  useEffect(() => {
    play ? audio.play() : audio.pause()
  },
    [play, audio]
  )
  return (
    <ModalWrapper>
      <ModalContainer>
        <ModalContent>
          <Row>
            <Column>
              <Image src={artist?.picture_big!}/>
            </Column>
            <Column>
              <ModalHeader>{title}</ModalHeader>
              <ModalText>By: {artist?.name}</ModalText>
              <PlayContainer onClick={togglePlay}>
                {play ? <Pause/> : <Play/>}
              </PlayContainer>
              {explicit ? <Explicit>Explicit</Explicit> : ""}
            </Column>
          </Row>
          <hr/>
          
          <Row>
            <Column>
            <ModalCategory>Album</ModalCategory>
              <ModalText>{album?.title}</ModalText>
              <ModalTextSm>Rel: {release_date}</ModalTextSm>
            </Column>
            <Column>
              <ImageSmall src={album?.cover!}/>
            </Column>
          </Row>
        </ModalContent>
      </ModalContainer>
    </ModalWrapper>
  )
}

export default Track