import { BiPhone } from "react-icons/bi";

const TopBar = () => {
   return (
      <div className="bg-black text-white text-sm py-2">
         <div className="container mx-auto px-4 flex justify-between items-center">
            <p className="text-xs sm:text-sm">
               Free shopping worldwide from orders above $500
            </p>
            <div className="flex items-center gap-4">
               <div className="hidden sm:flex items-center gap-2">
                  <BiPhone size={14} />
                  <span>Helpline: (123) 456 789</span>
               </div>
               <select className="bg-transparent text-white text-sm border-none focus:outline-none">
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="GBP">GBP</option>
               </select>
               <select className="bg-transparent text-white text-sm border-none focus:outline-none">
                  <option value="ENG">ENG</option>
                  <option value="ESP">ESP</option>
                  <option value="FRA">FRA</option>
               </select>
            </div>
         </div>
      </div>
   );
};

export default TopBar;
