import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const Navbar = () => {
  const [value, setValue] = React.useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <AppBar position="fixed" color="primary" style={{ top: 'auto', bottom: '0', padding: 0, zIndex: 9999 }}>
      <Toolbar style={{width: '100vw', padding: 0}}>
        <BottomNavigation style={{display: 'flex', justifyContent: 'space-between', width: '100vw',}} value={value} onChange={handleChange} showLabels>
        <BottomNavigationAction onClick={handleMenuClose} component={Link} to="/" label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction onClick={handleMenuClose} component={Link} to="/tele"  label="Tele" icon={<FavoriteIcon />} />
         <BottomNavigationAction onClick={handleMenuClose} component={Link} to="/profile"  label="Profile" icon={<LocationOnIcon />} />
       </BottomNavigation>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;