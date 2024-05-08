import { useState } from "react"
import { createContext } from "react"

export let CartContext = createContext(0) 

export default function CartContextProvider({ children }) {
    const [cartCount, setCartCount] = useState(0)
    function changeCart() {
        setCartCount(cartCount + 1);
        console.log('done')
    }
    return (
      <CartContext.Provider value={{ cartCount, changeCart }}>
        {children}
      </CartContext.Provider>
    );
}