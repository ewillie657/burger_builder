import React from 'react';

import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

import Logo from '../../Logo/Logo';

import classes from './Toolbar.css';

const toolbar = (props) => (

    <header className={classes.Toolbar}>
        <DrawerToggle clicked={props.drawerToggleClicked} />
        {/* <Logo height="80%" /> */}
        <div className={classes.Logo}>
            <Logo height="80%" />
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems isAuthenticated={props.isAuth} />
        </nav>
    </header>

);

export default toolbar;