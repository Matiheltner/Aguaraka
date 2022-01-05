import {useState, useEffect,useContext} from 'react';
import {useParams} from 'react-router-dom';
import {getFirestore} from "../../../services/getFirestore";
import ItemDetail from "./ItemDetail";
import {CartContext} from '../../Cart/CartContext';

const ItemDetailContainer =  () => {
    const [loading, setLoading] = useState (true)
    const {products} = useContext(CartContext);
    const {productID} = useParams ()

    useEffect(() =>{

        setTimeout(() => {
            setLoading(false);
        }, 1000);

    })

    return(
<>
    <h3>Producto</h3>
    { loading ?  <span className="visually-hidden">Loading...</span>
    :
    <div className='border border-3 border-secondary'>
     <ItemDetail product={products} id={productID}/>
    </div>
}
</>
)
};

export default ItemDetailContainer;