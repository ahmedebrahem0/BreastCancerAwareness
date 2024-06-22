
import { createContext, useState } from "react";

export const CartContext = createContext();

export default function CartContextProvider({ children }) {
  const [cartCount, setCartCount] = useState(0);
  const [userData, setUserData] = useState(null);
  return (
    <CartContext.Provider
      value={{ cartCount, setCartCount, userData, setUserData }}
    >
      {children}
    </CartContext.Provider>
  );
}