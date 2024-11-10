
import React from 'react';
import Navbar from '../Component/Navbar';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='mt-10'>
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;