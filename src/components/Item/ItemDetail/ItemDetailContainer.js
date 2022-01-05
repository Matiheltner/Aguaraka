import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {getFirestore} from "../../../services/getFirestore";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer =  () => {
    const [products, setProducts] = useState ([])
    const [loading, setLoading] = useState (true)

    const {productID} = useParams ()

    return(
<>
    <h3>Producto</h3>
    { loading ?  <span className="visually-hidden">Loading...</span>
    :
    <div className='border border-3 border-secondary'>
     <ItemDetail producto={products} id={productID}/>
    </div>
}
</>
)
};

export default ItemDetailContainer;