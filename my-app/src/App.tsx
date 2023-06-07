import React from 'react';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Track from './Components/Assests/Spanningtracks/Track';
import Span from './Components/Assests/Spankeyword/Span';
import Repeat from './Components/Assests/Repeatnotation/Repeat';
import Gridarea from './Components/Assests/Gridarea/Gridarea';
import Grid1 from './Components/Assests/Grid1/Grid1';
import Mediaqueries from './Components/Assests/Mediaqueries/Mediaqueries';
import Position from './Components/Assests/Position/Position';
import Gridauto from './Components/Assests/Gridauto/Gridauto';
import Nestedgrid from './Components/Assests/Nestedgrid/Nestedgrid';
import Aligment from './Components/Assests/Boxalignment/Aligment';

import { BrowserRouter,Routes,Route, Link } from 'react-router-dom';


function Header(){
  return(
    <u>
      
      <li><Link to ='/'>Home</Link></li>
        <li><Link to ='/About'>About</Link></li>
       <li> <Link to ='/Contact'>Contact</Link></li>
       <li><Link to='/Track'>Track</Link></li>
       <li><Link to='/Span'>Span KeyWord</Link></li>
       <li><Link to='/Repeat'>Repeat</Link></li>
       <li><Link to='/Gridarea'>Gridarea</Link></li>
       <li><Link to='/Grid1'>Grid1</Link></li>
       <li><Link to='/Mediaqueries'>Mediaqueries</Link></li>
       <li><Link to='/Position'>Position</Link></li>
       <li><Link to='/Gridauto'>Gridauto</Link></li>
       <li><Link to='/Nestedgrid'>Nestedgrid</Link></li>
       <li><Link to='/aligment'>aligment</Link></li>
       <li><Link to='/Aligment'>Aligment</Link></li>
    </u>
  )
}
function App() {
  return (
     <div className="App">   
     <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/Track' element={<Track/>}/>
      <Route path='/Span' element={<Span/>}/>
      <Route path='/Repeat' element={<Repeat/>}/>
      <Route path='/Gridarea' element={<Gridarea/>}/>
      <Route path='/Grid1' element={<Grid1/>}/>
      <Route path='/Mediaqueries' element={<Mediaqueries/>}/>
      <Route path='/Position' element={<Position/>}/>
      <Route path='/Gridauto' element={<Gridauto/>}/>
      <Route path='/Nestedgrid' element={<Nestedgrid/>}/>
      <Route path='/Aligment' element={<Aligment/>}/>
    </Routes>
    </BrowserRouter>
   
    </>
  </div>
   
    
  );
}

export default App;
