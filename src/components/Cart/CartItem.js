const CartItem = ({product}) =>{


    return(
        <>
            <p>Elegiste {product.name}</p>
            <p>Por un valor de ${product.price}</p>
            <p>¡Seleccionaste {product.quantity} piezas de barro!</p>
        </>
    );
}

export default CartItem; 