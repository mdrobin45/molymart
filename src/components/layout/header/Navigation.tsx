"use client";
import { CartContext } from "@/context/CartContextProvider";
import Link from "next/link";
import { useContext } from "react";
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
   const { wishlist } = useContext(CartContext);
   return (
      <div className="border-b">
         <div className="container mx-auto px-4">
            <div className="flex items-center justify-between py-4">
               <ul className="flex items-center gap-x-6">
                  {pages.map((page) => (
                     <li
                        key={page.name}
                        className="group max-lg:border-b max-lg:px-3 max-lg:py-3 relative">
                        <Link
                           href={`${
                              page.subPages ? "javascript:void(0)" : page.href
                           }`}
                           className="hover:text-primary hover:fill-primary text-secondary font-[500] text-[15px] block">
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
                        </Link>

                        {page.subPages && page.subPages.length > 0 && (
                           <ul className="absolute top-5 max-lg:top-8 left-0 z-50 block space-y-2 shadow-lg bg-white max-h-0 overflow-hidden min-w-[250px] group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500">
                              {page.subPages.map((subPage) => (
                                 <li
                                    key={subPage.name}
                                    className="border-b py-3">
                                    <Link
                                       href={subPage.href}
                                       className="hover:text-primary hover:fill-primary text-gray-600 font-semibold text-[15px] block">
                                       <TfiAngleRight className="w-[16px] mr-2 h-[16px] inline-block" />
                                       {subPage.name}
                                    </Link>
                                 </li>
                              ))}
                           </ul>
                        )}
                     </li>
                  ))}
               </ul>
               <ul className="flex items-center gap-4">
                  <li
                     className="group max-lg:border-b max-lg:px-3 max-
                        lg:py-3 relative">
                     <Link
                        href="#"
                        className="hover:text-primary hover:fill-primary text-secondary font-[500] text-[15px] block">
                        Home
                     </Link>
                  </li>
                  <span className=" text-gray-400">|</span>
                  <li
                     className="group max-lg:border-b max-lg:px-3 max-
                        lg:py-3 relative">
                     <Link
                        href="#"
                        className="hover:text-primary flex items-center gap-2 hover:fill-primary text-secondary font-[500] text-[15px]">
                        Wishlist
                        <span className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                           {wishlist?.length !== 0 ? wishlist?.length : 0}
                        </span>
                     </Link>
                  </li>
                  <span className=" text-gray-400">|</span>
                  <li
                     className="group max-lg:border-b max-lg:px-3 max-
                        lg:py-3 relative">
                     <Link
                        href="#"
                        className="hover:text-primary hover:fill-primary text-secondary font-[500] text-[15px] block">
                        Track Order
                     </Link>
                  </li>
               </ul>
            </div>
         </div>
      </div>
   );
};

export default Navigation;
