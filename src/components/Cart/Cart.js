import { useCarritoContext } from "../Cart/CartContext"
import { memo } from "react";
import CartItem from "../Cart/CartItem";

const Cart = memo( () =>{

    const { cartList, removeItemCart, clearCarro} = useCarritoContext();


    return (

        <div className="cartContainer">
            { cartList.map( product => <CartItem key={product.id} product={product}/>)}
        </div>

    )

}
)

export default Cart; 