"use client";
import {
   getDataLocalStorage,
   removeDataLocalStorage,
   saveDataLocalStorage,
   toggleWishlist,
} from "@/utils/localStorageOperation";
import { createContext, useEffect, useState } from "react";

export const CartContext = createContext<any>(null);

// Provider
const CartContextProvider = ({ children }: { children: React.ReactNode }) => {
   const [cart, setCart] = useState<any[]>([]);
   const [wishlist, setWishlist] = useState<any[]>([]);
   // Get cart from local storage
   const getCart = () => {
      const cartData = getDataLocalStorage("cart");
      setCart(cartData ? cartData : []);
   };

   // Get wishlist from local storage
   const getWishlist = () => {
      const wishlistData = getDataLocalStorage("wishlist");
      setWishlist(wishlistData ? wishlistData : []);
   };

   // Add item to cart
   const addItemToCart = (item: any) => {
      saveDataLocalStorage("cart", item);
      getCart();
   };

   // Toggle wishlist
   const toggleWishlistItem = (item: any) => {
      toggleWishlist(item);
      getWishlist();
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
      <CartContext.Provider
         value={{
            addItemToCart,
            removeItemFromCart,
            cart,
            toggleWishlistItem,
            wishlist,
         }}
      >
         {children}
      </CartContext.Provider>
   );
};

export default CartContextProvider;
