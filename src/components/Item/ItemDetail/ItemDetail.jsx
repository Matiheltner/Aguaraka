import {useState} from 'react'
import {Link} from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'


const ItemDetail =({producto,id}) => {
    
const [wasClick, setWasClick] = useState(false)

const addOn = (quantity) => {
    console.log("Compraste " + quantity + " productos.")
    setWasClick(true);
};

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
            <p>Abrir la Tienda</p>
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