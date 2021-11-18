import CartWidget from './Cart/CartWidget';
import {Link} from 'react-router-dom'

const NavBar = () => {

  return (
  <div className="navBar">
  <Link to ="/">
      <h1 className="title">AguaraKa</h1>
  </Link>
      <h2 className="subTitle">Cada objeto es una pieza de amor con una pizca de barro del Litoral</h2>
  <Link to ="/products">
      <button>Productos</button>
  </Link>
  <Link to ="/">
    <button>Técnica</button>  
  </Link>
  <Link to ="/">
      <button>La Artista</button>
  </Link>
      <CartWidget/>
    </div>
  );
}

export default NavBar;
