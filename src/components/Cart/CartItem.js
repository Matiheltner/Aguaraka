import { useCarritoContext } from "./CartContext";
const CartItem = ({product}) =>{
    const { removeItemCart } = useCarritoContext();

    return(
        <>
            <p className="title">Elegiste {product.name}</p>
            <img src={product.imagen} alt='Imagen del Producto' className='w-25' />
            <p className="quien">Por un valor de ${product.price}</p>
            <p className="quien">¡Seleccionaste {product.quantity} piezas de barro!</p>
            <button type="button" onClick={ () => removeItemCart(product.id)}>Eliminar este articulo</button>
        </>
    );
}

export default CartItem; 