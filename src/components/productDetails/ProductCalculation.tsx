"use client";
import americanExpress from "@/assets/images/amex.svg";
import discover from "@/assets/images/discover.svg";
import mastercard from "@/assets/images/mastercard.svg";
import paypal from "@/assets/images/paypal.svg";
import visa from "@/assets/images/visa.svg";
import westernUnion from "@/assets/images/western-union.svg";
import { CartContext } from "@/context/CartContextProvider";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { BsHandbag } from "react-icons/bs";
import { CgShoppingCart } from "react-icons/cg";

// Credit card payment icons
const creditCardIcons = [
   visa,
   mastercard,
   discover,
   westernUnion,
   americanExpress,
   paypal,
];
const ProductCalculation = ({ product }: { product: any }) => {
   const { addItemToCart, cart } = useContext(CartContext);
   const currentProduct = cart.find((item: any) => item.sku === product.sku);
   const [quantity, setQuantity] = useState(1);
   const [totalPrice, setTotalPrice] = useState(product?.price?.current);

   // Initialize total price
   useEffect(() => {
      setTotalPrice(currentProduct?.price || product?.price?.current);
   }, [currentProduct, product]);

   // Initialize quantity
   useEffect(() => {
      setQuantity(currentProduct?.quantity || 1);
   }, [currentProduct]);

   // Quantity Increment
   const handleIncrement = () => {
      setQuantity((prev: number) => prev + 1);
   };

   // Quantity Decrement
   const handleDecrement = () => {
      setQuantity((prev: number) => Math.max(1, prev - 1));
   };

   // Calculate total price
   const calculateTotalPrice = () => {
      setTotalPrice(product?.price?.current * quantity);
   };
   useEffect(() => {
      calculateTotalPrice();
   }, [quantity]);

   // Add item to cart
   const handleAddToCart = () => {
      addItemToCart({
         sku: product?.sku,
         quantity: quantity,
         price: totalPrice,
      });
   };

   return (
      <div>
         <div className="w-full max-w-md rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            {/* Price Header */}
            <div className="space-y-1">
               <div className="flex flex-col items-baseline">
                  <h2 className="text-sm font-medium text-gray-500">
                     Total Price
                  </h2>
                  <div className="flex items-baseline gap-x-3 pt-2">
                     <p className="text-3xl font-bold">${totalPrice}</p>
                     <p className="text-xs text-gray-500">(VAT included)</p>
                  </div>
               </div>
            </div>

            {/* Stock Status */}
            <div
               className={`inline-flex items-center bg-green-100 px-2.5 py-0.5 mt-3 ${
                  product?.sold_count === 0 ? "bg-red-100" : ""
               }`}>
               <span
                  className={`text-xs py-[2px] font-medium ${
                     product?.sold_count === 0
                        ? "text-red-600"
                        : "text-green-600"
                  }`}>
                  {product?.sold_count === 0 ? "Out of Stock" : "In Stock"}
               </span>
            </div>

            {/* Delivery Info */}
            <div className="space-y-2 my-3">
               <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Estimated Delivery:</span>
                  <span className="font-medium">9 Jun - 17 Jun</span>
               </div>
               <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Free Return:</span>
                  <span className="font-medium">
                     Within 15 days of purchase
                  </span>
               </div>
            </div>
            <hr />

            {/* Quantity Selector */}
            <div className="flex items-center gap-x-3 my-3">
               <span className="text-sm font-medium text-gray-700">
                  Quantity
               </span>
               <div className="flex items-center space-x-3 border border-gray-200 rounded-lg p-2">
                  <button
                     onClick={handleDecrement}
                     className="rounded-md p-1 hover:bg-gray-100"
                     aria-label="Decrease quantity">
                     <BiMinus className="h-4 w-4 text-gray-600" />
                  </button>
                  <span className="w-8 text-center text-lg font-medium">
                     {quantity}
                  </span>
                  <button
                     onClick={handleIncrement}
                     className="rounded-md p-1 hover:bg-gray-100"
                     aria-label="Increase quantity">
                     <BiPlus className="h-4 w-4 text-gray-600" />
                  </button>
               </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 my-3">
               <button
                  disabled={product?.sold_count === 0}
                  
                  className={`flex w-full items-center justify-center rounded-lg bg-primary py-4 text-sm font-semibold text-secondary shadow-sm hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-primary ${
                     product?.sold_count === 0
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                  }`}>
                  <BsHandbag className="mr-2 h-4 w-4" />
                  Buy Now
               </button>
               <button
                  disabled={product?.sold_count === 0}
                  onClick={handleAddToCart}
                  className={`flex w-full items-center justify-center rounded-lg bg-secondary py-4 text-sm font-semibold text-white shadow-sm hover:bg-secondary/80 focus:outline-none focus:ring-2 focus:ring-secondary ${
                     product?.sold_count === 0
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                  }`}>
                  <CgShoppingCart className="mr-2 h-4 w-4" />
                  Add to Cart
               </button>
            </div>

            {/* Payment Info */}
            <div className="space-y-3 my-3">
               <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                  <svg
                     className="h-4 w-4"
                     fill="none"
                     stroke="currentColor"
                     viewBox="0 0 24 24">
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                     />
                  </svg>
                  <span>Secured Payment Guaranteed</span>
               </div>
               <div className="flex justify-center space-x-2">
                  {creditCardIcons.map((icon, index) => (
                     <div
                        key={index}
                        className="border w-20 h-10 p-1 border-gray-200 rounded-md">
                        <Image
                           width={100}
                           height={50}
                           src={icon}
                           alt="Visa"
                           className="w-full h-full object-cover"
                        />
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
};

export default ProductCalculation;
