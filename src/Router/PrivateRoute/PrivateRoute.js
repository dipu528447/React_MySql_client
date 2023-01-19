import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';


const PrivateRoute = ({children}) => {
    const location=useLocation();
    const [user,setUser]=useContext(UserContext);
    
    if(user?.email){
        return children
    }
    return <Navigate to='/login' state={{from:location}}replace></Navigate>
    
};

export default PrivateRoute;