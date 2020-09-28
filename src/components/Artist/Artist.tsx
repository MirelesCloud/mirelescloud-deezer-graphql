import React  from 'react'
import { ArtistDetailQuery } from '../../generated/graphql'
import {
  ModalWrapper, 
  ModalContainer,
  ModalContent,
  ModalHeader,
  ModalTextSm,
  Image,
  Row,
  Column,
} from '../../Styles'



interface Props {
  data: ArtistDetailQuery
}

const Artist: React.FC<Props> = ({ data }) => {
  console.log(data)
  const { name, picture, nb_album, nb_fan } = data?.artist!
  
  function formatNum(i: number) {
    return i.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }

  return (
    <ModalWrapper>
      <ModalContainer>
        <ModalContent>
          <Row>
            <Column>
              <Image src={picture!} alt={name!}/>
            </Column>
            <Column>
              <ModalHeader>{name}</ModalHeader>
              <ModalTextSm>Fans: {formatNum(nb_fan!)}</ModalTextSm>
              <ModalTextSm>Albums: {nb_album!}</ModalTextSm>
            </Column>
          </Row>
        </ModalContent>
      </ModalContainer>
    </ModalWrapper>
  )
}

export default Artist