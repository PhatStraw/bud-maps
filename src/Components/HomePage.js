import React, { Component, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import MapContainer from './Map';
import Menu from './Menu';
import Navbar from './Navigation';
import SearchAppBar from './Search';
const HomePage = () => {
    const location = useLocation();
    const isProfilePage = location.pathname === '/' || location.pathname === '/bud-maps/';
    const [collectives, setCollectives] = useState([]);
    const dataa = [
    { name: "Cali Collection", distance: "2.5mi", recreational: true, deliver: true }, 
    { name: "California Gold Collective", distance: "21mi", recreational: true, deliver: false }, 
    { name: "Collection Of Calis Fimest", distance: "4mi", recreational: false, deliver: true }, 
    { name: "Colorado Buddo And CO", distance: "0.5mi", recreational: false, deliver: false }, 
    { name: "1 Bud For All", distance: "12.5mi", recreational: true, deliver: false }, 
    { name: "COOMER", distance: "2mi", recreational: true, deliver: true }, 
    { name: "Cassie Collection", distance: "5mi", recreational: true, deliver: true }
]
    useEffect(() => {
      async function fetchCallData() {
        try {
        //   const response = await fetch('/api/calls');
        //   const data = await response.json();
          const data = dataa
          setCollectives(data);
        } catch (error) {
          console.error(error);
        }
      }
  
      fetchCallData();
    }, []);
    return (
        <div >
            {isProfilePage &&  
                <div>
                    <SearchAppBar />
                    <MapContainer />
                    <Menu collectives={collectives}/>
                </div>
            }
        </div>
    );
}


export default HomePage;