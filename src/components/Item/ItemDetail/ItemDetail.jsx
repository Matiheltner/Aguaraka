import {useState, } from 'react'
import {Link} from 'react-router-dom'
import {useCarritoContext} from '../../Cart/CartContext'
import ItemCount from '../ItemCount/ItemCount'


const ItemDetail =({id}) => {
    
const [wasClick, setWasClick] = useState(false)

const { addCarrito, products } = useCarritoContext();

const addOn = (quantity) => {
    
    addCarrito({...products[index], quantity});
    setWasClick(true);
};
   

    let index = products.findIndex(element => element.id === id);
    

    return (
        <div className="col-4 m-3 border w-25 m-auto" data-id={products[index].id}>  
            <div className='card-header'>{products[index].name}</div>
            <div className='card-header'>{products[index].price}</div>
            <img src={products[index].imagen} alt='Imagen del Producto' className='w-25' />
            <div className="card-body">
            <div className='card-header'>{products[index].description}</div>
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