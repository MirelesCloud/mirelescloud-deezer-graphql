import React, { useState } from 'react'
import { TrackInfoQuery } from '../../generated/graphql'
import { minutes } from '../../AuxFunction'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import {
  ModalWrapper, 
  ModalContainer,
  ModalHeader,
  ModalSubHeader,
  ModalText,
  Image,
  ImageSmall,
  TrackPreviewContainer,
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
  console.log(data)
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
              <TrackPreviewContainer>
                <Image src={artist?.picture_big!}/>
                <AudioPlayer 
                  onPlay={togglePlay} 
                  src={preview!}
                  />
              </TrackPreviewContainer>
            </Column>
            <Column>
              <ModalHeader>{title}</ModalHeader>
              <ModalSubHeader>By: {artist?.name}</ModalSubHeader>
              <ModalText><small>{minutes(duration!)} min.</small></ModalText>
              {explicit ? <Explicit>Explicit</Explicit> : ""}
              <hr style={{width: "50%"}}/>
              <ModalText style={{alignItems: "center"}}><strong>Album: </strong>{album?.title!}</ModalText>
              <ModalText><small>Rel.: {release_date}</small></ModalText>
              <ImageSmall src={album?.cover!}/> 
            </Column>
          </Row>
      </ModalContainer>
    </ModalWrapper>
  )
}

export default Track