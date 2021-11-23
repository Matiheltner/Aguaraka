import {useState, useEffect} from 'react'
import getFetch from "../../../services/getFetch";
import {Link} from 'react-router-dom'

import ItemList from "./ItemList";


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


    return (
<>
        <h1 className="greeting">{greeting}</h1>
    
    { loading ?  <span className="visually-hidden">Loading...</span>
   : 
   <div className="card-columns row">
                    { products.map(prod=> <div key={prod.id} className="card w-25 m-5 col-4 border" >
                                            <div className="card-header">
                                                {`${prod.name} - ${"$" +prod.price}`}
                                            </div>
                                            <div className="card-body">
                                                <img src={prod.foto} alt='' />
                                                {prod.descripcion}
                                            </div>
                                            <div className="card-footer">
                                                    <Link to={`/detail/${prod.id}`}>
                                                        <button className="btn btn-outline-primary btn-block">
                                                            Ver detalle del producto
                                                        </button>
                                                    </Link>
                                            </div>
                                        </div>
                                        )}

                </div>
   }
</>
)
}
export default ItemListContainer;