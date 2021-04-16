import React from 'react';
import {
  AppBar,
  // Button,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { ShoppingCart as CartIcon } from '@material-ui/icons';
import { withRouter } from 'react-router-dom';
import NavigationDrawer from '../NavigationDrawer/NavigationDrawer';
import AvatarMenu from '../AvatarMenu/AvatarMenu';
import useStyles from './styles';

const Navigation = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar>
        <Toolbar>
          <NavigationDrawer />

          <Typography variant='h4' className={classes.title}>
            ShopPortal
          </Typography>

          <IconButton color='inherit'>
            <AvatarMenu />
          </IconButton>

          <CartIcon />
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
};

export default withRouter(Navigation);
