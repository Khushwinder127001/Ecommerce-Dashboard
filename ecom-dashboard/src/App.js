import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap'
import Header from './Header'
import Login from './Login';
import Register from './Register'
import AddProduct from './Add-product';
import UpdateProduct from './Update-product';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Protected from './Protected'


function App() {
  return (
    <div className="App">
      <BrowserRouter>       
        <Routes>
        <Route path="/" element={" Home "} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/update" element={<Protected Cmp ={UpdateProduct} />} />
        <Route path="/add" element={<Protected Cmp={AddProduct} />} />        
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
