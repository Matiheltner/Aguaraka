import CartWidget from './CartWidget';

const NavBar = () => {

return (
    <div className="navBar">
      <h1 className="title">AguaraKa</h1>
      <h2 className="subTitle">Cada objeto es una pieza de amor con una pizca de barro del Litoral</h2>
      <button>Productos</button>
      <button>Técnica</button>
      <button>La Artista</button>
      <CartWidget/>
    </div>
  );
}

export default NavBar;
