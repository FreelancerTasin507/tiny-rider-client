import { createContext } from "react";
import { getAuth } from "firebase/auth";
import app from "../../public/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = () => {

    
    const authInfo  = {
        
    }

  return <AuthContext.Provider value={authInfo}>
    
  </AuthContext.Provider>;
};

export default AuthProvider;
