import {useState, useEffect} from 'react'
import getFetch from "../services/getFetch";
import ItemList from "./ItemList";
import ItemCount from './ItemCount';

const ItemListContainer = function ({greeting}) {
const [products,setProducts] = useState ([])
const [loading,setLoading] = useState (true)
useEffect(() => {
    getFetch
    .then(res => {
        setProducts(res)
    }
    )
    .catch(err => console.log(err))
    .finally(() => setLoading(false))
    },[])
console.log(products)

    return (
<>
    <div>
        <h1 className="greeting">{greeting}</h1>
    </div>
    { loading ?  <span className="visually-hidden">Loading...</span>
   : <ItemList productos={products}/>}

</>
)
}

export default ItemListContainer;