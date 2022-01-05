import {useState,useEffect} from 'react'
import {useParams} from'react-router-dom'
import {getFirestore} from "../../../services/getFirestore";

import {Link} from 'react-router-dom'

import ItemList from "./ItemList";


const ItemListContainer = function ({greeting}) {
    const [products,setProducts] = useState ([])
    const [loading,setLoading] = useState (true)
    const { categoryID } = useParams()
    useEffect(() =>{

        setLoading(true);

        const dbQuery = getFirestore();    // Conexión con Firestore

        // Promesa

        if (categoryID) {
            dbQuery.collection('products').where('category', '==', categoryID).get() // // Traigo toda la categoría
            .then(data => setProducts(   data.docs.map(pro => ( { id: pro.id, ...pro.data() } ))   ))
            .catch(err=> console.log(err))
            .finally(()=> setLoading(false))

        } else {
            dbQuery.collection('products').get() // Traigo toda la colección "Products"
            .then(data => setProducts(   data.docs.map(pro => ( { id: pro.id, ...pro.data() } ))   ))
            .catch(err=> console.log(err))
            .finally(()=> setLoading(false))
        }

    }, [categoryID, setProducts])

    return (
<>
        <h1 className="greeting">{greeting}</h1>
    
    { loading ?  <span className="visually-hidden">Loading...</span>
   : 
   <div className="card-columns row">
                    { products.map(prod=> <div key={prod.id} className="card w-25 m-5 col-4 border d-flex row justify-content-center" >
                                            <div className="card-header">
                                                {`${prod.name} - ${"$" +prod.price}`}
                                            </div>
                                            <div className="card-body d-flex flex-column">
                                                <img src={prod.imagen} alt='' style={{maxWidth:"300px",maxHeight:"300px"}}/>
                                                {prod.description}
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