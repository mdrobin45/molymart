import MainHeader from "./MainHeader";
import Navigation from "./Navigation";
import TopBar from "./Topbar";

const Header = () => {
   return (
      <div>
         <TopBar />
         <MainHeader />
         <Navigation />
      </div>
   );
};

export default Header;
