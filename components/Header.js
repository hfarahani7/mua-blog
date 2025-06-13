import * as React from 'react';
import Link from "next/link";
import styles from '../styles/header.module.css';

import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import { Toolbar } from "@mui/material";

import '@fontsource/cormorant-upright';
import '@fontsource/mr-de-haviland';

export default function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const navLinks = [
    { label: "Portfolio", href: "/portfolio" },
    { label: "Services", href: "/services" },
    { label: "Inquiries", href: "/inquiries" },
  ];

  return (
    <AppBar className={styles.appbar}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
            <Button onClick={handleOpenNavMenu} color="inherit">
              <MenuIcon sx={{ color: 'black' }} />
            </Button>
          </Box>

          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: { xs: 'center', md: 'left' } }}>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              className={styles.logo}
            >
              Jeanice Huang
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {navLinks.map((link) => (
                <MenuItem key={link.label} >
                  <Link href={link.href}>
                    <Typography className={styles.navLink}>{link.label}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
            {navLinks.map((link) => (
              <MenuItem key={link.label}>
                <Link href={link.href}>
                  <Typography variant="inherit" className={styles.navLink}>{link.label}</Typography>
                </Link>
              </MenuItem>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}