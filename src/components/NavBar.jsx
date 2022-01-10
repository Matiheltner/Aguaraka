import CartWidget from './Cart/CartWidget';
import {Link} from 'react-router-dom'
import { Dropdown} from 'react-bootstrap'
const NavBar = () => {

  return (
  <div className="navBar">
    <Link to ="/">
    <img src="../aguaraka.png" alt="" />
  </Link>
      <h2 className="subTitle">Cada objeto es una pieza de amor con una pizca de barro del Litoral</h2>
      <div id="myCarousel" className="carousel slide" data-bs-ride="carousel " style={{ width:"100vw",height:"15vw" }} >
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-label="Slide 1" aria-current="true"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" className=""></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" className=""></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active"style={{width:"100%",height:"260px"}}>
        <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"></rect></svg>

        <div className="container">
          <div className="carousel-caption text-start" style={{width:"100vw",height:"220px"}}>
            <h1>Piezas del corazón</h1>
            <p>¿Querés conocer mas de nuestros productos?</p>
            <Link to ="/products">
          <p className="btn btn-lg btn-primary">Catalogo general</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="carousel-item"style={{width:"100%",height:"260px"}}>
        <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"></rect></svg>

        <div className="container">
          <div className="carousel-caption"style={{width:"100vw",height:"220px"}}>
            <h1>Técnica</h1>
            <p>Conoce mas de la tecnica detrás de este "arte funcional"</p>
            <Link to ="/Tecnica">
            <p className="btn btn-lg btn-primary">Conocé más</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="carousel-item"style={{width:"100%",height:"260px"}}>
        <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"></rect></svg>
        <div className="container">
          <div className="carousel-caption text-end"style={{width:"300px",height:"220px"}}>
            <h1>La Artista</h1>
            <p>¡Mi nombre es Karina, entra a conocerme!</p>
            <Link to ="/">
            <p className="btn btn-lg btn-primary">¡Conoceme!</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  <div className="divBoton d-flex flex-row justify-content-center">
  <Dropdown>
  <Dropdown.Toggle variant="primary" id="dropdown-basic">Catalogo</Dropdown.Toggle>
    <Dropdown.Menu>
      <div>
    <Link to ="/categoria/Ceramica">
      <p className="btn btn-primary">Ceramica</p>
      </Link>
      </div>
      <div>
      <Link to ="/categoria/Gres">
      <p className="btn btn-primary">Gres</p>
      </Link>
      </div>
    </Dropdown.Menu>
</Dropdown>
  <Link to ="/Tecnica">
    <p className="btn  btn-primary">Técnica</p>
  </Link>
  <Link to ="/">
    <p className="btn btn-primary">La Artista</p>
  </Link>
      <CartWidget/>
    </div>
    </div>
  );
}

export default NavBar;
