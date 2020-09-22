import * as React from 'react'
import { useState, useEffect } from 'react'
import {
  ModalHeader,
  ModalText,
  Image,
  Row,
  Column,
  Play,
  Pause,
} from '../../Styles'


interface Props {
  artist: string;
  title: string;
  picture: string;
  preview: string;
}

export const TrackModal: React.FC<Props> = ({title, picture, artist, preview}) => {
 const [audio] = useState(new Audio(preview))
 const [play, setPlay] = useState(false)

 const togglePlay = () => setPlay(!play)
  
 useEffect(() => {
   play ? audio.play() : audio.pause()
 },
  [play, audio]
 )
  
  return (
      <Row>
        <Column>
          <Image src={picture}/>
        </Column>
        <Column>
          <ModalHeader>{title}</ModalHeader>
          <ModalText>{artist}</ModalText>
          <div onClick={togglePlay}>{play ? <Pause/> : <Play/>}</div>
        </Column>
      </Row>
  )
}