import React from 'react';
import { useHistory, withRouter } from 'react-router-dom';
import { IconButton, Menu, MenuItem } from '@material-ui/core/';
import { AccountCircle as AccountIcon } from '@material-ui/icons';

const AvatarMenu = () => {
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (link) => {
    history.push(link);
    setAnchorEl(null);
  };

  const links = [
    {
      name: 'Login',
      link: '/login',
    },
    {
      name: 'Signup',
      link: '/signup',
    },
  ];

  return (
    <>
      <IconButton
        aria-controls='simple-menu'
        aria-haspopup='true'
        color='inherit'
        onClick={handleClick}>
        <AccountIcon />
      </IconButton>
      <Menu
        id='simple-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}>
        {links.map((link, i) => {
          return (
            <MenuItem
              key={i}
              onClick={() => {
                handleClose(link.link);
              }}>
              {link.name}
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
};

export default withRouter(AvatarMenu);
