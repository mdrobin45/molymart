"use client";

import molymartLogo from "@/assets/images/molymart-logo.svg";
import { CartContext } from "@/context/CartContextProvider";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { BiSearch, BiUser } from "react-icons/bi";

const MainHeader = () => {
   const { cart } = useContext(CartContext);
   const totalPrice = cart.reduce(
      (acc: number, item: any) => acc + item.price,
      0
   );
   return (
      <div className="bg-primary py-4">
         <div className="container mx-auto px-4">
            <div className="flex items-center justify-between gap-4">
               <div className="flex-shrink-0">
                  <Image
                     src={molymartLogo}
                     alt="Molymart"
                     width={170}
                     height={100}
                  />
               </div>

               <div className="hidden md:flex flex-1 max-w-xl relative">
                  <select className="absolute text-white left-0 top-0 h-full bg-secondary rounded-md px-3 focus:outline-none">
                     <option value="">All Categories</option>
                     <option value="1">Category 1</option>
                     <option value="2">Category 2</option>
                     <option value="3">Category 3</option>
                  </select>
                  <input
                     type="search"
                     placeholder="Search product here..."
                     className="flex h-10 w-full rounded-md bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none ring-2 ring-offset-4 ring-gray-400 disabled:cursor-not-allowed disabled:opacity-50 pl-40 rounded-l-md"
                  />
                  <button
                     type="submit"
                     className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground px-4 py-2 absolute right-0 top-0 h-full rounded-l-none">
                     <BiSearch className="w-6 h-6 text-gray-500" />
                  </button>
               </div>

               <div className="flex items-center gap-4">
                  <Link href="#" className="hidden sm:flex items-center gap-2">
                     <BiUser className="w-5 h-5" />
                     <div className="text-left">
                        <div>Sign in/up</div>
                     </div>
                  </Link>

                  <div className="relative flex items-center">
                     <span className="relative">
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           width="20px"
                           height="20px"
                           className="cursor-pointer fill-secondary hover:fill-secondary inline-block"
                           viewBox="0 0 512 512">
                           <path
                              d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
                              data-original="#000000"></path>
                        </svg>
                        <span className="absolute left-auto -ml-1 top-0 rounded-full bg-red-500 px-1 py-0 text-xs text-white">
                           {cart?.length !== 0 ? cart?.length : 0}
                        </span>
                     </span>
                     <span className="pl-6 text-gray-500">{"|"}</span>
                     <span className="ml-2">${totalPrice.toFixed(2)}</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default MainHeader;
