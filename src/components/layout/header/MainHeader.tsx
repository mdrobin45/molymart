import molymartLogo from "@/assets/images/molymart-logo.svg";
import Image from "next/image";
import { BiSearch, BiShoppingBag, BiUser } from "react-icons/bi";
import { MdOutlineShoppingCart } from "react-icons/md";

const MainHeader = () => {
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
                  <select className="absolute text-white left-0 top-0 h-full bg-black rounded-md px-3 focus:outline-none">
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
                  <button className="hidden sm:flex items-center gap-2">
                     <BiUser className="w-5 h-5" />
                     <div className="text-left">
                        <div>Sign in/up</div>
                     </div>
                  </button>

                  <button className="relative flex items-center">
                     <MdOutlineShoppingCart className="w-5 h-5" />
                     <span>0</span>
                     <span className="px-1">{"|"}</span>
                     <span className="ml-2">$0.00</span>
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default MainHeader;
