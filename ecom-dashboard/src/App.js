import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap'
import Header from './Header'
import Login from './Login';
import Register from './Register'
import AddProduct from './Add-product';
import UpdateProduct from './Update-product';
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
        <Route path="/" element={" Home "} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/update" element={<UpdateProduct />} />
        <Route path="/add" element={<AddProduct />} />        
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
