/* import { useEffect, useState } from 'react'; */
import './App.css';
import NavBar from './components/NavBar'
import Products from './components/Products/Products'
import Api from './components/Api'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<h1>crear homepage</h1>}/>
          <Route path='/contact' element={<h1>crear contact</h1>}/>
          <Route path='/store' element={<Products/>}/>
          <Route path='/store/1' element={<ItemDetailContainer/>}/>
          <Route path='/us' element={<h1>crear about us</h1>}/>
          <Route path='/Api' element={<Api/>}/>
          <Route path='*' element={<NotFoundPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
      /* <div>
        <NavBar/>

        <Products/>
        <ItemDetailContainer/>
        <Api/>
      </div> */
  ); 
}

export default App;
