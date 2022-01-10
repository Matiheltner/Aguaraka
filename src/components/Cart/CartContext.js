import { createContext, useContext, useState} from "react";

export const CartContext = createContext([]);
export const useCarritoContext = () => useContext(CartContext);
const CartContextProvider = ({children}) =>{
    const [quantity, setQuantity] = useState(0);
    const [products,setProducts] = useState ([])
    const [cartList, setCartList] = useState([]);

    function addCarrito(item){

        if(cartList.find(element => element.id === item.id) === undefined){
            setCartList([...cartList, item]);
            setQuantity( quantity + item.quantity);
        }
        else{
            addQuantity(item);
        }
    }

    function addQuantity(item){
        let index = cartList.findIndex(element => element.id === item.id)
        if(index !== -1){
            cartList[index].quantity += item.quantity;
            setQuantity( quantity + item.quantity);
        }
    }

    function clearCarro(){
        setCartList([]);
        setQuantity(0);
    }

    function removeItemCart(id){
        let itemIndex = cartList.findIndex( element => element.id === id);
        setQuantity( quantity - cartList[itemIndex].quantity );
        setCartList(cartList.filter(element => element.id !== id));
        
    }

    return(
        <CartContext.Provider value={{quantity, useCarritoContext, addCarrito, cartList, setCartList, clearCarro, removeItemCart, setProducts, products}}>
            {children}
        </CartContext.Provider>

    )
}

export default CartContextProvider;