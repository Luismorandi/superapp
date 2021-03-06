import React from "react"; 
import Navbar from "./components/navBarFolder/Navbar"
import ItemListContainer from "./components/itemListFolder/ItemListContainer"
import "./App.css"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Cart from "./components/cartFolder/Cart";
import CartContextProvider from "./components/context/CartContextProvider";



const App = () => {

  
  return (
  <BrowserRouter>
    <CartContextProvider>
      <Navbar/>
      <Routes>
        <Route path="/" element={<ItemListContainer />}/>
        <Route path="category/:categoryId" element={<ItemListContainer />}/>
        <Route path="products/:productId" element={<ItemDetailContainer/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </CartContextProvider>
  </BrowserRouter>
  )
}

export default App