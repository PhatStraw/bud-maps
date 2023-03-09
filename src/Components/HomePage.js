import React, { Component } from 'react';
import MapContainer from './Map';
import Menu from './Menu';


class HomePage extends Component {

    render() {

        return (
            <div >
                <MapContainer />
                <Menu />
            </div>
        );
    }
}


export default HomePage;