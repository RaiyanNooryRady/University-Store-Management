//import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import StoreManagement from './components/StoreManagement';
import AllItems from './components/AllItems';
import AddItem from './components/AddItem';
import EditItem from './components/EditItem';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import { ClassNames } from '@emotion/react';

function App() {
  return (
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<StoreManagement />} />
          <Route path='/all' element={<AllItems />} />
          <Route path='/add' element={<AddItem />} />
          <Route path='/edit/:id' element={<EditItem />}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
