import React, { useState, useCallback } from 'react';
import './App.css';
import { MainContainer, Nav, NavLeft, NavHeader} from './Styles'
import ChartList from './components/ChartList'
import Track from './components/Track'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  const [id, setId] = useState("")
  const handleId = useCallback(newId => {
    setId(newId)
  }, [])

  console.log(id)

  return (
    <>
     <Router>
     <Nav>
       <NavHeader>
         <NavLeft>MirelesCloud Music App</NavLeft>
       </NavHeader>
     </Nav>
     <MainContainer>
       <ChartList handleId={handleId}/>
     </MainContainer>
     <Route path="track/:id" component={Track}/>
     </Router>
    </>
   
  );
} 

export default App;
