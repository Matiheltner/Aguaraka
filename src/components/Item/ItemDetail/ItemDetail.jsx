import {useState, useContext} from 'react'
import {Link} from 'react-router-dom'
import {useCarritoContext} from '../../Cart/CartContext'
import ItemCount from '../ItemCount/ItemCount'
import {CartContext} from '../../Cart/CartContext'


const ItemDetail =({id}) => {
    
const [wasClick, setWasClick] = useState(false)

const { addCarrito, cartList, products } = useCarritoContext();

const addOn = (quantity) => {
    console.log("Compraste " + quantity + " productos.")
    addCarrito({...products[index], quantity});
    setWasClick(true);
};
    console.log(products);

    let index = products.findIndex(element => element.id === id);
    console.log(index)

    return (
        <div className="col-4 m-3 border w-25 m-auto" data-id={products[index].id}>  
            <div className='card-header'>{products[index].name}</div>
            <div className='card-header'>{products[index].price}</div>
            <img src={products[index].imagen} alt='Imagen del Producto' className='w-25' />
            <div className="card-body">
            <div className='card-header'>{products[index].descripcion}</div>
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