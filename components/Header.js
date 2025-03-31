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
        // {
        //     label: "About",
        //     href: "/about",
        //     // subLinks: [
        //     //     { label: "FAQ", href: "/inquiries#faq" },
        //     //     { label: "About Me", href: "/inquiries#me" }
        //     // ]
        // },
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

    const navStyle = {
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
    };

    const dropdownContainerStyle = {
        position: "absolute",
        top: "100%",
        left: 0,
        display: "none",
        backgroundColor: "#fff",
        border: "1px solid #ccc",
        padding: "0.5rem",
        zIndex: 999,
    };

    const dropdownItemStyle = {
        display: "block",
        textDecoration: "none",
        color: "#333",
        margin: "0.25rem 0",
    };

    const linkStyle = {
        textDecoration: 'none',
        color: 'EFACA5',
        transition: 'color 0.2s ease',
        position: "relative"
    };

    return (
        <AppBar
            style={{
                display: 'flex',
                alignItems: 'center',
                height: '60px',
                padding: '0 20px',
                // backgroundColor: '#F7E7CE',
                // backgroundColor: '#1e4005',
                // backgroundColor: '#EFACA5',
                backgroundColor: '#BADD7F',
                //8A9A5B not bad
                postion: 'static'
            }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
                        <Button onClick={handleOpenNavMenu} color="inherit">
                            <MenuIcon sx={{ color: 'black' }}/>
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
                            sx={{
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
                                // WebkitTextStroke: "1px black", // Border thickness and color
                                fontFamily: "Mr De Haviland",
                                fontSize: "2.5em",
                            }}
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
                                    <Link href={ link.href }>
                                        <Typography sx={{ textAlign: 'center', color: '#EFACA5' }}>{link.label}</Typography>
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
                                    <Link href={ link.href }>
                                        <Typography sx={{ textAlign: 'center', color: '#3E8440', fontSize: "1.5em", fontFamily: 'Cormorant Upright', fontWeight: '10000000'}}>
                                            {link.label}
                                        </Typography>
                                    </Link>

                                    {link.subLinks && (
                                        <div className="dropdown" style={dropdownContainerStyle}>
                                            {link.subLinks.map((subLink) => (
                                                <Link
                                                    key={subLink.label}
                                                    href={subLink.href}
                                                    style={dropdownItemStyle}
                                                >
                                                    {subLink.label}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </MenuItem>
                            ))}
                    </Box>
                </Toolbar>
            </Container >
        </AppBar >
    )
}