import React from 'react';
import './App.css';
import { MainContainer, Nav, NavLeft, NavHeader} from './Styles'
import ChartList from './components/ChartList'
import TrackDetail from './components/TrackDetail'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <>
     <Router>
       <Route path="track/:id" component={TrackDetail}/>
     <Nav>
       <NavHeader>
         <NavLeft>MirelesCloud Music App</NavLeft>
       </NavHeader>
     </Nav>
     <MainContainer>
       <ChartList/>
     </MainContainer>
     </Router>
    </>
   
  );
} 

export default App;
