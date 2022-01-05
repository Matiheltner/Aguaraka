import { createContext, useContext, useState} from "react";

export const CartContext = createContext([]);


export const useCarritoContext = () => useContext(CartContext);
const CartContextProvider = ({children}) =>{
    const [products,setProducts] = useState ([])
    const [cartList, setCartList] = useState([]);

    function addCarrito(item){

        if(cartList.find(element => element.id === item.id) === undefined){
            setCartList([...cartList, item]);
        }
        else{
            addQuantity(item);
        }
    }

    function addQuantity(item){
        let index = cartList.findIndex(element => element.id === item.id)
        if(index !== -1){
            cartList[index].quantity += item.quantity;
        }
    }

    function clearCarro(){
        setCartList([]);
    }

    function removeItemCart(id){
        let index = cartList.findIndex(element => element.id === id);
        if(index !== -1){
            cartList.splice(index, 1);
        }
    }

    return(
        <CartContext.Provider value={{ useCarritoContext, addCarrito, cartList, setCartList, clearCarro, removeItemCart, setProducts, products}}>
            {children}
        </CartContext.Provider>

    )
}

export default CartContextProvider;