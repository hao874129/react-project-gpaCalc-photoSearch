import React, { useState, useCallback } from 'react'
import { NavLink } from "react-router-dom"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Slide from '@mui/material/Slide';
import useScrollTrigger from '@mui/material/useScrollTrigger';

const drawerWidth = 240;



const HideOnScroll = (props) => {
  const { children } = props;
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}


function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const navItems = ['Photo Research', 'GPA calc']
  const navItemsName = {
    'Photo Research': '相片搜尋',
    'GPA calc': 'GPA 計算機',
  }

  const navItemsRoute = {
    'Photo Research': 'photoResearch',
    'GPA calc': 'gpaCalc',
  }

  const handleDrawerToggle = useCallback(() => {
    setMobileOpen((prevState) => !prevState);
  }, []);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }} style={{ userSelect: 'none' }} >
        <NavLink to='/#' style={({ isActive }) => ({ color: isActive ? '#7f8fb0' : '#374157', })} >
          by EN
        </NavLink>
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding style={{ display: "block" }}>
            <NavLink to={navItemsRoute[item]} style={({ isActive }) => ({ color: isActive ? '#7f8fb0' : '#374157', })} >
              <ListItemButton sx={{ textAlign: 'center', width: 'auto' }}>
                <ListItemText primary={navItemsName[item]} />
              </ListItemButton>
            </NavLink>

          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', position: 'relative' }}>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar component="nav" >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none', color: "#d1dddb" } }}
            >
              <MenuIcon />
            </IconButton>

            <Typography
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block', } }}
            >
              <NavLink to='/#' style={({ isActive }) => ({ color: isActive ? '#7f8fb0' : '#d1dddb' })} >
                <Typography variant="h6" sx={{ padding: '.5rem', display: 'inline-block', userSelect: 'none' }}>
                  by EN
                </Typography>
              </NavLink>
            </Typography>

            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {navItems.map((item) => (
                <Button key={item} sx={{ padding: 0, margin: 0 }}>
                  <NavLink to={navItemsRoute[item]} style={({ isActive }) => ({ color: isActive ? '#7f8fb0' : '#d1dddb', padding: '.75rem' })} >
                    {navItemsName[item]}
                  </NavLink>
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll >

      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box >
  );
}
export default Header