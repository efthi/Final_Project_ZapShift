import React from 'react';
import useAuth from '../hooks/useAuth';
import Spinner from '../components/Shared/Spinner';
import {Navigate, useLocation} from 'react-router';

const PrivateRoutes = ({children}) => {
    const {user, auLoading} = useAuth();
    const location = useLocation();

    if(auLoading){
        return <Spinner></Spinner>;
    }
    if(!user){
        return <Navigate to='/login' state ={location.pathname || '/'}></Navigate>;
    }
    return children;
};

export default PrivateRoutes;