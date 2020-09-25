import * as React from 'react'
import ReactDOM from 'react-dom'

import {
  Overlay,
  Dialog,
  Header,
  CloseButton,
  Content,
  
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
    <Overlay>
      <Dialog>
        <Header>
          <CloseButton onClick={hide}/>
        </Header>
        <Content>{modalContent}</Content>
      </Dialog>
    </Overlay>
  )

  return isShown ? ReactDOM.createPortal(modal, document.body) : null;
}

