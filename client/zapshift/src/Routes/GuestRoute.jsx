
import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { useLocation, Navigate } from 'react-router';
import Spinner from '../Components/Spinner';
import useAuth from '../hooks/useAuth';

const GuestRoute = ( {children} ) => {

const { user, auLoading } = useAuth
const location = useLocation();
    if(user) {
        const backTo = location.state?.from?.pathname || "/";
        return <Navigate to ={backTo} replace/>;
    }
    
    return (  children  );
};

export default GuestRoute;