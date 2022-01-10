import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/Item/ItemList/ItemListContainer';
import ItemDetailContainer from './components/Item/ItemDetail/ItemDetailContainer';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import CartContextProvider from './components/Cart/CartContext';
import Cart from './components/Cart/Cart';
import Artista from './components/Artista/artista'
import Tecnica from './components/Tecnica/Tecnica';

function App() {
  return (
    <CartContextProvider>
    <BrowserRouter>
    <div className="App">
    <NavBar/>
    <Routes>
    <Route exact path='/' element={<Artista/>}/>
    <Route exact path='/Tecnica' element={<Tecnica/>}/>
      <Route exact path='/products' element={<ItemListContainer/>}/>
      <Route exact path='/categoria/:categoryID' element={<ItemListContainer/>} />
      <Route exact path= '/detail/:productID' element={<ItemDetailContainer/>}/>
      <Route exact path='/cart' element={<Cart/>}/>
    </Routes>
    </div>
    </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
