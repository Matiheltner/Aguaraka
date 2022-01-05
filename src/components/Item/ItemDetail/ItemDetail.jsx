import {useState, useContext} from 'react'
import {Link} from 'react-router-dom'
import {useCarritoContext} from '../../Cart/CartContext'
import ItemCount from '../ItemCount/ItemCount'
import CartContext from '../../Cart/CartContext'


const ItemDetail =({product,id}) => {
    
const [wasClick, setWasClick] = useState(false)

const { addCarrito, cartList } = useCarritoContext();

const addOn = (quantity) => {
    console.log("Compraste " + quantity + " productos.")
    addCarrito({...product[index], quantity});
    setWasClick(true);
};
    console.log(cartList);

    let index = product.findIndex(element => element.id === id);
    console.log(index)

    return (
        <div className="col-4 m-3 border w-25" data-id={product[index].id}>  
            <div className='card-header'>{product[index].name}</div>
            <div className='card-header'>{product[index].price}</div>
            <img src={`./resources/${product[index].name}.jpg`} alt='Imagen del Producto' className='w-25' />
            <div className="card-body">
            <div className='card-header'>{product[index].descripcion}</div>
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