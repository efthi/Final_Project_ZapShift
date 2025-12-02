import React from 'react';
import useAuth from '../hooks/useAuth';
import Spinner from '../components/Shared/Spinner';
import {Navigate} from 'react-router';

const PrivateRoutes = ({children}) => {
    const {user, auLoading} = useAuth();

    if(auLoading){
        return <Spinner></Spinner>;
    }
    if(!user){
        return <Navigate to='/login'></Navigate>;
    }
    return children;
};

export default PrivateRoutes;