import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer'


function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting="¡Bienvenida/o a la tienda oficial de AguaraKa!"/>
    </div>
  );
}

export default App;