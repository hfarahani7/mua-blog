import * as React from 'react';
import Link from "next/link";

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
        {
            label: "Portfolio",
            href: "/portfolio",
            subLinks: [
                { label: "Bridal", href: "/inquiries#faq" },
                { label: "Editorial", href: "/inquiries#editorial" }
            ]
        },
        {
            label: "Services",
            href: "/services",
            subLinks: [
                { label: "Travel", href: "/process#travel" },
                { label: "Rates", href: "/process#rates" },
                { label: "Cancellation", href: "/process#cancellation" },
                { label: "Deposits", href: "/process#deposits" },
            ]
        },
        {
            label: "Inquiries",
            href: "/inquiries",
        },
    ];

    const linkStyle = {
        textAlign: 'center',
        color: '#3E8440',
        fontSize: '1.5em',
        fontFamily: 'Cormorant Upright'
    };

    const logoStyle = {
        mr: 2,
        display: { xs: 'flex', md: 'flex' },
        fontFamily: 'monospace',
        fontWeight: 1000,
        letterSpacing: '.3rem',
        color: '#3E8440',
        textDecoration: 'none',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: "Mr De Haviland",
        fontSize: "2.5em",
    }

    return (
        <AppBar
            style={{
                display: 'flex',
                alignItems: 'center',
                height: '60px',
                padding: '0 20px',
                backgroundColor: '#BADD7F',
                postion: 'static'
            }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
                        <Button onClick={handleOpenNavMenu} color="inherit">
                            <MenuIcon sx={{ color: 'black' }} />
                        </Button>
                    </Box>

                    <Box
                        sx={{
                            flexGrow: 1,
                            display: 'flex',
                            justifyContent: { xs: 'center', md: 'left' }
                        }}
                    >
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={logoStyle}
                        >
                            Jeanice Huang
                        </Typography>
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{ display: { xs: 'block', md: 'none' } }}
                        >
                            {navLinks.map((link) => (
                                <MenuItem
                                    key={link.label}
                                    href={link.href}
                                >
                                    <Link href={link.href}>
                                        <Typography sx={linkStyle}>{link.label}</Typography>
                                    </Link>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
                        {navLinks.map((link) => (
                            <MenuItem
                                key={link.label}
                                href=""
                                style={{
                                    position: "relative",
                                }}
                            >
                                <Link href={link.href}>
                                    <Typography sx={linkStyle}>
                                        {link.label}
                                    </Typography>
                                </Link>
                            </MenuItem>
                        ))}
                    </Box>
                </Toolbar>
            </Container >
        </AppBar >
    )
}