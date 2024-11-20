"use client";
import Image from "next/image";
import { useState } from "react";
import { CgChevronLeft, CgChevronRight, CgMaximize } from "react-icons/cg";

const images = [
   "/dress1.jpg",
   "/dress2.jpg",
   "/dress3.jpg",
   "/dress4.jpg",
   "/dress5.jpg",
];
const ProductGallery = () => {
   const [currentImage, setCurrentImage] = useState(0);

   // Next image
   const nextImage = () => {
      setCurrentImage((prev) => (prev + 1) % images.length);
   };

   // Previous image
   const previousImage = () => {
      setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
   };

   return (
      <div className="relative flex gap-4 h-[85%]">
         <div className="flex flex-col gap-4 justify-between">
            {images.map((image, index) => (
               <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`relative aspect-square w-20 overflow-hidden rounded-lg ${
                     currentImage === index ? "ring-2 ring-black" : ""
                  }`}>
                  <Image
                     width={88}
                     height={96}
                     src={image}
                     alt={`Product Image Slide - ${index}`}
                     className="h-full w-full object-cover"
                  />
               </button>
            ))}
         </div>
         <div className="relative aspect-square flex-1 overflow-hidden rounded-lg">
            <button className="absolute right-4 top-4 z-10 rounded-lg bg-white/80 p-2 backdrop-blur-sm">
               <CgMaximize className="h-5 w-5" />
            </button>
            
               <Image
                  width={440}
                  height={440}
                  src={images[currentImage]}
                  alt="Product Image"
                  className="h-full w-full object-cover"
               />

            <button
               onClick={previousImage}
               className="absolute left-4 top-1/2 z-10 -translate-y-1/2 bg-white/80 p-2 backdrop-blur-sm">
               <CgChevronLeft className="h-5 w-5" />
            </button>
            <button
               onClick={nextImage}
               className="absolute right-4 top-1/2 z-10 -translate-y-1/2 bg-white/80 p-2 backdrop-blur-sm">
               <CgChevronRight className="h-5 w-5" />
            </button>
         </div>
      </div>
   );
};

export default ProductGallery;
