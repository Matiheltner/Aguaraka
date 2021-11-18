import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import getFetch from "../../../services/getFetch";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer =  () => {
    const [products, setProducts] = useState ([])
    const [loading, setLoading] = useState (true)

    const {productID} = useParams ()

    useEffect(() => {
        getFetch
        .then(res => {
        setProducts(res)
})
        .catch(err => console.log(err))
        .finally(() => setLoading(false))

        let index = products.findIndex(element => element.id === productID);
        console.log(index)
})

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