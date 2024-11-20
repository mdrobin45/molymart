import React from "react";
import ProductGallery from "./ProductGallery";
import ProductInfo from "./productInfo/Index";
import ProductCalculation from "./ProductCalculation";


const ProductDetails = () => {
   return (
      <div className="container mx-auto">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8">
            <ProductGallery />
            <ProductInfo />
            <ProductCalculation />
         </div>
      </div>
   );
};

export default ProductDetails;
