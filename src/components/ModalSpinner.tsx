import React from 'react'
import styled from '@emotion/styled'

const ModalSpinner = () => {
  return (
    <LoadContainer>
      <Loader/>
      <LoadMessage>Loading...</LoadMessage>
    </LoadContainer>

  )
}

export default ModalSpinner

const LoadContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin: 0 100px 75px;

  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

const Loader = styled.div`
  margin-top: 20px;
  border-top: 10px solid #58b647;
  border-right: 10px solid rgba(136, 136, 136, 0.2);
  border-bottom: 10px solid rgba(136, 136, 136, 0.2);
  border-left: 10px solid rgba(136, 136, 136, 0.2);
  animation: spinner 0.9s linear infinite;
  border-radius: 50%;
  width: 64px;
  height: 64px
`

const LoadMessage = styled.div`
  margin-top: 16px;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 130%;
  color: #888;
`