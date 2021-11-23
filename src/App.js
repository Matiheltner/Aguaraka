import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/Item/ItemList/ItemListContainer';
import ItemDetailContainer from './components/Item/ItemDetail/ItemDetailContainer';
import ItemCount from './components/Item/ItemCount/ItemCount';
import {BrowserRouter, Routes,Route} from 'react-router-dom'

const Cart = () =>{
  return (<p>Este es su carrito de compras.</p>)
}

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <NavBar/>
    <Routes>
      <Route exact path='/products' element={<ItemListContainer/>}/>
      <Route exact path= '/detail/:productID' element={<ItemDetailContainer/>}/>
      <Route exact path='/cart' element={<Cart/>}/>
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
