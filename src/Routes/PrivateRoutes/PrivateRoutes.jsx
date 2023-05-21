import { useContext } from "react";
import { RotatingLines } from "react-loader-spinner";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const PrivateRoutes = ({children}) => {
  const { userInfo, loading } = useContext(AuthContext);
  const location = useLocation();


  if (loading) {
    return (
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    );
  }
  if(userInfo?.email){
    return children;
}

  return <Navigate state={{from: location}} to="/login" replace></Navigate>;
};

export default PrivateRoutes;
