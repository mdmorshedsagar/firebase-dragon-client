import React from 'react';
import Navigationbar from '../Pages/Shared/Navigationbar/Navigationbar';
import { Outlet } from 'react-router-dom';

const LoginLogout = () => {
    return (
        <div>
            <Navigationbar></Navigationbar>
            <Outlet></Outlet>
        </div>
    );
};

export default LoginLogout;