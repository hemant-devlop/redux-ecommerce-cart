import './App.css'
import Navbar from './component/Header'
import Products from './component/Products'
import PageNotFound from './component/PageNotFound'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from './component/Home'
import Cart from './component/Cart'
import { Toaster } from 'react-hot-toast';
function App() {
  
  return(
    <>
    <BrowserRouter>
    <Navbar/> 
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='*' element={<PageNotFound/>}/>
    </Routes>
      <Toaster />

    </BrowserRouter>
    </>
  )
}

export default App
