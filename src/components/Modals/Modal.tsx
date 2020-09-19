import * as React from 'react'
import ReactDOM from 'react-dom'

import {
  Wrapper,
  Header,
  StyledModal,
  CloseButton,
  Content,
  Backdrop,
  
} from '../../Styles'

export interface Props {
  isShown: boolean;
  hide: () => void;
  modalContent: JSX.Element;
}

export const Modal: React.FC<Props> = ({
  isShown,
  hide,
  modalContent,
}) => {

  const modal = (
    <>
      <Backdrop/>
      <Wrapper>
        <StyledModal>
          <Header>
            <CloseButton onClick={hide}>X</CloseButton>
          </Header>
          <Content>{modalContent}</Content>
        </StyledModal>
      </Wrapper>
    </>
  )

  return isShown ? ReactDOM.createPortal(modal, document.body) : null;
}

