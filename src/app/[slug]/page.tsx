import ProductCalculation from "@/components/productDetails/ProductCalculation";
import ProductGallery from "@/components/productDetails/ProductGallery";
import ProductInfo from "@/components/productDetails/productInfo/Index";

const ProductDetails = async ({ params }: { params: { slug: string } }) => {
   const fetchProducts = await fetch(
      `${
         process.env.NODE_ENV === "development"
            ? "http://localhost:3000"
            : process.env.NEXT_PUBLIC_BASE_URL
      }/data/products.json`
   );

   const products = await fetchProducts.json();
   const currentProduct = products.find(
      (product: any) => product.slug === params.slug
   );
   if (!currentProduct) {
      return <div>Product not found</div>;
   }
   return (
      <div className="container mx-auto">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8">
            <ProductGallery product={currentProduct} />
            <ProductInfo product={currentProduct} />
            <ProductCalculation product={currentProduct} />,
         </div>
      </div>
   );
};

export default ProductDetails;
