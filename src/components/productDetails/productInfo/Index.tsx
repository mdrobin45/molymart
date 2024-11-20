"use client";
import { useState } from "react";
import {
   BsHeart,
   BsInstagram,
   BsTiktok,
   BsTwitterX,
   BsWhatsapp,
} from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { IoIosGitCompare } from "react-icons/io";
import SalesEndCountDown from "./SalesEndCountDown";
import { Rating } from "react-simple-star-rating";

// Sizes and colors
const sizes = ["38", "40", "42", "43", "44"];
const colors = [
   { name: "gray", hex: "#64748b" },
   { name: "blue", hex: "#0284c7" },
   { name: "red", hex: "#dc2626" },
];

const ProductInfo = () => {
   const [selectedSize, setSelectedSize] = useState("42");
   const [selectedColor, setSelectedColor] = useState("gray");
   return (
      <div className="flex flex-col gap-6">
         {/* Rating */}
         <div>
            <div className="flex items-center gap-2">
               <Rating
                  style={{ marginTop: "-10px" }}
                  initialValue={4}
                  size={20}
                  readonly
               />
               <span className="text-sm text-gray-600">(98 Reviews)</span>
               <span className="mx-2 text-gray-300">|</span>
               <span className="ml-2 font-medium text-red-600">500+ Sold</span>
            </div>
            <h1 className="mt-4 text-2xl font-semibold">
               Charms Charisma heavy winter full sleeve jacket with hoodie for
               women made from wolves fur and buffalo bones
            </h1>
            <p className="text-sm py-2 text-gray-600">
               The garments labelled as committed are products that have been
               produced using sustainable fibres or processes, reducing their
               environmental impact. Moly’s goal is to support the implemented.
            </p>

            {/* Sale ends countdown */}
            <SalesEndCountDown />
         </div>

         {/* Price */}
         <div className="flex items-center gap-4">
            <span className="text-3xl font-bold">$100.00</span>
            <span className="text-lg text-gray-500 line-through">$129.99</span>
            <span className="rounded-full bg-primary px-3 py-1 text-sm font-medium text-black">
               Save 15%
            </span>
         </div>

         {/* Color */}
         <div>
            <h3 className="mb-2 font-medium">Color</h3>
            <div className="flex gap-2">
               {colors.map((color) => (
                  <button
                     key={color?.name}
                     onClick={() => setSelectedColor(color?.name)}
                     style={{
                        backgroundColor: color?.hex,
                        borderColor: color?.hex,
                     }}
                     className={`h-8 w-8 rounded-full border-2 ${
                        selectedColor === color?.name
                           ? "ring-2 ring-black ring-offset-2"
                           : ""
                     }`}
                  />
               ))}
            </div>
         </div>

         {/* Size */}
         <div>
            <h3 className="mb-2 font-medium">Size</h3>
            <div className="flex gap-2">
               {sizes.map((size) => (
                  <button
                     key={size}
                     onClick={() => setSelectedSize(size)}
                     className={`h-10 w-10 rounded border ${
                        selectedSize === size
                           ? "border-black bg-primary text-black"
                           : "border-gray-200"
                     }`}>
                     {size}
                  </button>
               ))}
            </div>
         </div>

         <div className="pt-4 border-t border-gray-200 space-y-4">
            {/* SKU */}
            <div className="text-sm text-gray-600">
               <span className="font-semibold">SKU:</span> UTD7802574
            </div>

            {/* Categories */}
            <div className="text-sm text-gray-600">
               <span className="font-semibold">Categories: </span>
               <span className="text-gray-900 font-500">
                  Fashion, Winter, Women, New Arrivals, Flash Sales, Special
                  Offer, Hoodie
               </span>
            </div>

            {/* Social Share */}
            <div className="flex items-center space-x-4">
               <span className="font-semibold text-gray-600">Share</span>
               <div className="flex space-x-3 text-gray-600">
                  <a href="#" className="hover:text-gray-800">
                     <FaFacebookF className="h-5 w-5" />
                  </a>
                  <a href="#" className="hover:text-gray-800">
                     <BsTwitterX className="h-5 w-5" />
                  </a>
                  <a href="#" className="hover:text-gray-800">
                     <BsInstagram className="h-5 w-5" />
                  </a>
                  <a href="#" className="hover:text-gray-800">
                     <BsTiktok className="h-5 w-5" />
                  </a>
                  <a href="#" className="hover:text-gray-800">
                     <BsWhatsapp className="h-5 w-5" />
                  </a>
               </div>
            </div>

            {/* Wishlist and Compare Buttons */}
            <div className="flex space-x-4">
               <button className="flex items-center px-4 py-2 text-sm text-black bg-transparent border border-gray-200 rounded-full hover:bg-gray-200">
                  <BsHeart className="mr-2 h-4 w-4" /> Add to Wishlist
               </button>
               <button className="flex items-center px-4 py-2 text-sm text-black bg-transparent border border-gray-200 rounded-full hover:bg-gray-200">
                  <IoIosGitCompare className="mr-2 h-4 w-4" /> Add to Compare
               </button>
            </div>
         </div>
      </div>
   );
};

export default ProductInfo;
