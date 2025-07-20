import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div className='max-w-7xl mx-auto border-2 text-center'>
            <h1>This is home Component</h1>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;