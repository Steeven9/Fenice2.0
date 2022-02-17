import { AccountCircle } from '@mui/icons-material';
import { AppBar, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const TopBar = () => {
  const dispatch = useDispatch();
  const username = useSelector((st) => st.userReducer.username);
  const [anchorEl, setAnchorEl] = useState(null);

  const setPage = (p) => {
    dispatch({
      type: 'SET_PAGE',
      payload: p,
    });
  };

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleLogOut = () => {
    location.href =
      'https://login.soulsbros.ch/?p=closeSession&location=https://fenice2.soulsbros.ch';
  };
  return (
    <AppBar position="fixed" sx={{ zIndex: (th) => th.zIndex.drawer + 1 }} color="primary">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography
          variant="h6"
          noWrap
          component="div"
          onClick={() => setPage('home')}
          sx={{ cursor: 'pointer' }}
        >
          <img
            alt="favicon"
            src="img/favicon-32x32.png"
            style={{ verticalAlign: 'bottom', marginRight: 5 }}
          />
          La Compagnia della Fenice
        </Typography>
        {username ? (
          <div>
            {username}
            <IconButton size="large" onClick={handleOpenMenu} color="inherit">
              <AccountCircle />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleCloseMenu}
            >
              <MenuItem onClick={() => setPage('profile')}>Profile</MenuItem>
              <MenuItem onClick={handleLogOut}>Log out</MenuItem>
            </Menu>
          </div>
        ) : (
          <div></div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
