import {useState, useContext} from 'react'
import {Link} from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import CartContext from '../../Cart/CartContext'


const ItemDetail =({producto,id}) => {
    
const [wasClick, setWasClick] = useState(false)

const { addCarrito, cartList } = useContext(CartContext);

const addOn = (quantity) => {
    console.log("Compraste " + quantity + " productos.")
    addCarrito({...producto[index], quantity});
    setWasClick(true);
};
    console.log(cartList);

    let index = producto.findIndex(element => element.id === id);
    console.log(index)

    return (
        <div className="col-4 m-3 border w-25" data-id={producto[index].id}>  
            <div className='card-header'>{producto[index].name}</div>
            <div className='card-header'>{producto[index].price}</div>
            <img src={`./resources/${producto[index].name}.jpg`} alt='Imagen del Producto' className='w-25' />
            <div className="card-body">
            <div className='card-header'>{producto[index].descripcion}</div>
            </div>               
        {
            wasClick ?(
            <>
            <Link to="/cart">
            <p>Ir al carrito</p>
            </Link>
            
            <Link to="/products">
            <p>Seguir comprando</p>
            </Link>
            </> )
            :( 
                <ItemCount initial= {1} stock={5} addOn={addOn}/>)
            
        }     
        </div>
    )
    }

export default ItemDetail;