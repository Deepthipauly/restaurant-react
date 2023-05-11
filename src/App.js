import './App.css';
import Restaurant from './Restaurant';
import Header from './header';
import Footer from './Footer';
import { Route, Routes } from 'react-router-dom';
import Restview from './Restview';



function App() {
  return (
    <div className="App">
     <Header />

   <Routes>
     <Route path='/' element={ <Restaurant/>}></Route>
     <Route path='/viewRest/:id' element={<Restview/>}></Route>
   </Routes>
    
    
    <Footer/>
     
    </div>
  );
}

export default App;
