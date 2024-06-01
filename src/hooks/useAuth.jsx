import { useContext } from "react";
import { AuthContext } from "../contextApi/ContextApi";


const useAuth = () => {
    const authInformation = useContext(AuthContext)
    return authInformation
};

export default useAuth;