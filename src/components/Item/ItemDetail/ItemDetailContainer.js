import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import ItemDetail from "./ItemDetail";

const ItemDetailContainer =  () => {
    const [loading, setLoading] = useState (true);
    const {productID} = useParams();

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
     <ItemDetail id={productID}/>
    </div>
}
</>
)
};

export default ItemDetailContainer;