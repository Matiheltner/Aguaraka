import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/Item/ItemList/ItemListContainer';
import ItemDetailContainer from './components/Item/ItemDetail/ItemDetailContainer';
import ItemCount from './components/Item/ItemCount/ItemCount';
import {BrowserRouter, Routes,Route} from 'react-router-dom'



function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <NavBar/>
    <Routes>
      <Route exact path='/products' element={<ItemListContainer/>}/>
      <Route exact path= '/detail/:productID' element={<ItemDetailContainer/>}/>
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;

//<ItemCount stock={5} initial={1}/>