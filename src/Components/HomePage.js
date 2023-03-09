import React, { Component } from 'react';
import { useLocation } from 'react-router-dom';
import MapContainer from './Map';
import Menu from './Menu';

const HomePage = () => {
    const location = useLocation();
    const isProfilePage = location.pathname === '/' || location.pathname === '/bud-maps';

    return (
        <div >
            {isProfilePage &&  
                <div>
                    <MapContainer />
                    <Menu />
                </div>
            }
        </div>
    );
}


export default HomePage;