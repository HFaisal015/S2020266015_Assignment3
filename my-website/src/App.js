
 import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import PersonalitiesPage from './components/PersonalitiesPage';
import CitiesPage from './components/CitiesPage';
import TouristSpotsPage from './components/TouristSpotsPage';
import ContactPage from './components/ContactPage';
import Page_not_Found from './components/Page_not_Found';

function App() {
  
  return (
           
    <>

<div>

</div>

        <Routes>
   
        <Route path="/" element={<HomePage/>}/>
        <Route path="/Personalities" element={<PersonalitiesPage/>}/>
        <Route path="/cities" element={<CitiesPage/>}/>
        <Route path="/tourist-spots" element={<TouristSpotsPage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="*" element={<Page_not_Found />} />


        
        

        
         </Routes>

         
</>
  )
}
export default App;