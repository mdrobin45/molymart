const ProductCalculation = () => {
   return (
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
         {/* Total Price Section */}
         <div className="flex items-center justify-between">
            <span className="text-lg font-semibold">Total Price</span>
            <span className="text-xl font-bold text-gray-900">$ 208.00</span>
         </div>
         <div className="text-sm text-gray-600">(VAT included)</div>

         {/* Stock Status */}
         <div className="mt-4 text-sm text-green-600 font-medium">In Stock</div>

         {/* Estimated Delivery and Return */}
         <div className="mt-2 text-sm text-gray-600">
            <div>Estimated Delivery: 9 Jun - 17 Jun</div>
            <div>Free Return: Within 15 days of purchase</div>
         </div>

         {/* Quantity Selector */}
         <div className="mt-4 flex items-center">
            <span className="text-sm text-gray-600">Quantity</span>
            <div className="flex items-center ml-4">
               <button className="px-2 py-1 text-xl text-gray-700 border border-gray-300 rounded-l-md hover:bg-gray-100">
                  -
               </button>
               <input
                  type="number"
                  value="2"
                  className="w-12 text-center border-t border-b border-gray-300 focus:outline-none"
               />
               <button className="px-2 py-1 text-xl text-gray-700 border border-gray-300 rounded-r-md hover:bg-gray-100">
                  +
               </button>
            </div>
         </div>

         {/* Buttons */}
         <div className="mt-4 space-y-2">
            <button className="w-full py-2 text-white bg-green-500 rounded-md hover:bg-green-600 flex items-center justify-center">
               <span>Buy Now</span>
            </button>
            <button className="w-full py-2 text-white bg-gray-900 rounded-md hover:bg-gray-800 flex items-center justify-center">
               <span>Add to Cart</span>
            </button>
         </div>

         {/* Payment Icons */}
         <div className="mt-4 flex justify-center space-x-2">
            <img
               src="https://upload.wikimedia.org/wikipedia/commons/4/42/Visa_Logo.png"
               alt="Visa"
               className="h-6"
            />
            <img
               src="https://upload.wikimedia.org/wikipedia/commons/4/4f/MasterCard_logo.svg"
               alt="MasterCard"
               className="h-6"
            />
            <img
               src="https://upload.wikimedia.org/wikipedia/commons/3/39/PayPal_logo.svg"
               alt="PayPal"
               className="h-6"
            />
         </div>
         <div className="mt-2 text-xs text-gray-600 text-center">
            Secured Payment Guaranteed
         </div>
      </div>
   );
};

export default ProductCalculation;
