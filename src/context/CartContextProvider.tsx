"use client";
import {
   getDataLocalStorage,
   removeDataLocalStorage,
   saveDataLocalStorage,
} from "@/utils/localStorageOperation";
import { createContext, useEffect, useState } from "react";

export const CartContext = createContext<any>(null);

// Provider
const CartContextProvider = ({ children }: { children: React.ReactNode }) => {
   const [cart, setCart] = useState<any[]>([]);

   // Get cart from local storage
   const getCart = () => {
      const cartData = getDataLocalStorage("cart");
      setCart(cartData ? cartData : []);
   };

   // Add item to cart
   const addItemToCart = (item: any) => {
      saveDataLocalStorage("cart", item);
      getCart();
   };

   // Remove item from cart
   const removeItemFromCart = (sku: string) => {
      removeDataLocalStorage("cart", sku);
      getCart();
   };

   // Initialize cart
   useEffect(() => {
      getCart();
   }, []);

   return (
      <CartContext.Provider value={{ addItemToCart, removeItemFromCart, cart }}>
         {children}
      </CartContext.Provider>
   );
};

export default CartContextProvider;
