import React, { useState } from 'react'
import { TrackInfoQuery } from '../../generated/graphql'
import { minutes } from '../../AuxFunction'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import {
  ModalWrapper, 
  ModalContainer,
  ModalHeader,
  ModalText,
  ModalTextSm,
  Image,
  ImageSmall,
  Row,
  Column,
  Explicit,
} from '../../Styles'

interface Props {
  data: TrackInfoQuery
}
const Track: React.FC<Props> = ({ data  }) => {
  console.log(data)
  const { 
    title, 
    preview, 
    release_date, 
    artist, 
    album, 
    explicit, 
    duration, 
     } = data?.track!


  /* const [audio] = useState(new Audio(preview!)) */
  const [play, setPlay] = useState(false)
  const togglePlay = () => setPlay(!play)
  
 /*  useEffect(() => {
    play ? audio.play() : audio.pause()
  },
    [play, audio]
  ) */

  return (
    <ModalWrapper>
      <ModalContainer>
       
          <Row>
            <Column>
              <Image src={artist?.picture_big!}/>
              <AudioPlayer 
                onPlay={togglePlay} 
                src={preview!}
                />
            </Column>
            <Column>
              <ModalHeader>{title}</ModalHeader>
              <ModalText>By: {artist?.name}</ModalText>
              <ModalTextSm>{minutes(duration!)} min.</ModalTextSm>
              {explicit ? <Explicit>Explicit</Explicit> : ""}
              <ModalTextSm style={{alignItems: "center"}}><strong>Album: </strong>{album?.title!} </ModalTextSm>
              <ModalTextSm>{release_date}</ModalTextSm>
              <ImageSmall src={album?.cover!}/> 
            </Column>
          </Row>
      
      </ModalContainer>
    </ModalWrapper>
  )
}

export default Track