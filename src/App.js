import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import './components/ItemCount.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting="¡Bienvenida/o a la tienda oficial de AguaraKa!"/>
      <ItemCount stock={5} initial={1}/>
    </div>
  );
}

export default App;