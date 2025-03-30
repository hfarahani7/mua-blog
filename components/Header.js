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
            label: "About",
            href: "/about",
            // subLinks: [
            //     { label: "FAQ", href: "/inquiries#faq" },
            //     { label: "About Me", href: "/inquiries#me" }
            // ]
        },
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
        color: '#333',
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
                backgroundColor: '#F7E7CE',
                postion: 'static'
            }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
                        <Button onClick={handleOpenNavMenu} color="inherit">
                            <MenuIcon />
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
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                                textAlign: 'center',
                                justifyContent: 'center',
                                alignItems: 'center'
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
                            <MenuItem>
                                menu item 1
                            </MenuItem>
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
                                        <Typography sx={{ textAlign: 'center' }}>{link.label}</Typography>
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