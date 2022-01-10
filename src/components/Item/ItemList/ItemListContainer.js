import {useState,useEffect,useContext} from 'react'
import {useParams} from'react-router-dom'
import {getFirestore} from "../../../services/getFirestore";
import {CartContext} from '../../Cart/CartContext';

import ItemList from "./ItemList";


const ItemListContainer = function ({greeting}) {
    const { products, setProducts } = useContext(CartContext);
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
            <h1 style={{backgroundColor: "grey", color: "white" }}>{greeting}</h1>

            { loading ?    <span className="visually-hidden">Loading...</span>

                    :
                <div className="card-columns row">
                    <ItemList products={products}></ItemList>

                </div>
            }

        </>
)
}
export default ItemListContainer;