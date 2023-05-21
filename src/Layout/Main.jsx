import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Loader from "../Pages/Home/Loader/Loader";
import Footer from "../Shared/Footer/Footer";
import NavBar from "../Shared/NavBar/NavBar";

const Main = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {
       isLoading 
       ? <Loader></Loader>
       :
      <>
        <NavBar></NavBar>
        <Outlet></Outlet>
        <Footer></Footer>
      </>
      }
    </div>
  );
};

export default Main;
