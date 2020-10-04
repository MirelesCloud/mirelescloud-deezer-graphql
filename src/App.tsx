import React, { useState, useCallback } from 'react';
import './App.css';
import { MainContainer, Nav, NavLeft, NavHeader} from './Styles'
import ChartList from './components/ChartList'

function App() {
  const [id, setId] = useState("")
  const handleId = useCallback(newId => {
    setId(newId)
  }, [])

  console.log(id)

  return (
    <>
      <Nav>
        <NavHeader>
          <NavLeft>MirelesCloud Music App</NavLeft>
        </NavHeader>
      </Nav>
      <MainContainer>
        <ChartList handleId={handleId}/>
      </MainContainer>
    </>
   
  );
} 

export default App;
