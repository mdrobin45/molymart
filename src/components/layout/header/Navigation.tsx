import { HiHeart } from "react-icons/hi";
import { TfiAngleRight } from "react-icons/tfi";

// Navigation pages
const pages = [
   {
      name: "Demo",
      subPages: [
         { name: "Demo 1", href: "#" },
         { name: "Demo 2", href: "#" },
         { name: "Demo 3", href: "#" },
      ],
   },
   { name: "Shop", href: "#" },
   { name: "Product", href: "#" },
   { name: "Blog", href: "#" },
   {
      name: "Pages",
      subPages: [
         { name: "Page 1", href: "#" },
         { name: "Page 2", href: "#" },
         { name: "Page 3", href: "#" },
      ],
   },
];

const Navigation = () => {
   return (
      <div className="border-b">
         <div className="container mx-auto px-4">
            <div className="flex items-center justify-between py-4">
               <ul className="lg:flex lg:gap-x-10 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-2/3 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-4 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
                  {pages.map((page) => (
                     <li
                        key={page.name}
                        className="group max-lg:border-b max-lg:px-3 max-lg:py-3 relative">
                        <a
                           href={`${
                              page.subPages ? "javascript:void(0)" : page.href
                           }`}
                           className="hover:text-primary hover:fill-primary text-gray-600 font-semibold text-[15px] block">
                           {page.name}
                           {page.subPages && page.subPages.length > 0 && (
                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 width="16px"
                                 height="16px"
                                 className="ml-1 inline-block"
                                 viewBox="0 0 24 24">
                                 <path
                                    d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                                    data-name="16"
                                    data-original="#000000"
                                 />
                              </svg>
                           )}
                        </a>

                        {page.subPages && page.subPages.length > 0 && (
                           <ul className="absolute top-5 max-lg:top-8 left-0 z-50 block space-y-2 shadow-lg bg-white max-h-0 overflow-hidden min-w-[250px] group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500">
                              {page.subPages.map((subPage) => (
                                 <li
                                    key={subPage.name}
                                    className="border-b py-3">
                                    <a
                                       href={subPage.href}
                                       className="hover:text-primary hover:fill-primary text-gray-600 font-semibold text-[15px] block">
                                       <TfiAngleRight className="w-[16px] mr-2 h-[16px] inline-block" />
                                       {subPage.name}
                                    </a>
                                 </li>
                              ))}
                           </ul>
                        )}
                     </li>
                  ))}
               </ul>

               <div className="flex items-center gap-4">
                  <button className="font-medium">Compare</button>
                  <button className="font-medium flex items-center gap-2">
                     <HiHeart className="w-4 h-4" />
                     Wishlist
                     <span className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                        1
                     </span>
                  </button>
                  <button className="font-medium">Track Order</button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Navigation;
