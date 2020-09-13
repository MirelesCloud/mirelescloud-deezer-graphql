import React from 'react';
import './App.css';
import { MainContainer, Nav, NavLeft, NavHeader} from './Styles'
import ChartList from './components/ChartList'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function App() {
  return (
    <>
     <Nav>
       <NavHeader>
         <NavLeft>MirelesCloud Music App</NavLeft>
       </NavHeader>
     </Nav>
     <MainContainer>
       <ChartList/>
     </MainContainer>
    </>
   
  );
}

export default App;
