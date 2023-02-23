import React from 'react'
import { Link } from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useUserContext } from '../context/UserContext';

//how can I have user's name show up where the user icon currently is?

const NavBar = () => {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [menuEl, setMenuEl] = React.useState(null);
  const {user, setUser} = useUserContext()

  const handleChange = (event) => {
    setAuth(event.target.checked);
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleNav = (event) => {
    setMenuEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNavClose = () => {
    setMenuEl(null);
  };
  return (

    <Box sx={{ flexGrow: 1 }}>
    <FormGroup>
      <FormControlLabel
        control={
          <Switch
            checked={auth}
            onChange={handleChange}
            aria-label="login switch"
          />
        }
        label={auth ? 'Logout' : 'Login'}
      />
    </FormGroup>
    <AppBar sx={{ bgcolor: "green" }} position="static">
      <Toolbar>
        <div>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={handleNav}
        >
          <MenuIcon  />
        </IconButton>
        <Menu
              id="menu-appbar"
              anchorEl={menuEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(menuEl)}
              onClose={handleNavClose}
            >
              
              <MenuItem to="activities" component= { Link }>All Activities</MenuItem>
              <MenuItem to="createActivity" component= { Link }>Create New Activity</MenuItem>
              
            </Menu>
        </div>
        <Typography variant="h6" color="inherit" to="/" component= { Link } sx={{ flexGrow: 1 }}>
          West Slope Go
        </Typography>
        {auth && (
          <div>
            <span>Hi, {user.name}!</span>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem to="myActivities" component= {Link}>My Activities</MenuItem>

            </Menu>
          </div>
        )}
      </Toolbar>
      </AppBar>
    </Box>
  )
}

export default NavBar
