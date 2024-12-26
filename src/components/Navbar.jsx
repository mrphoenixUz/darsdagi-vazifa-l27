import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

export default function MenuAppBar() {
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleChange = (event) => {
        setAuth(event.target.checked);
    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <FormGroup>
            </FormGroup>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link to="/">BookStore</Link>
                    </Typography>
                    {token ? (

                        <div>
                            <Button onClick={() => { navigate("/add-book") }} variant="contained">Add Book</Button>
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
                                <MenuItem>My account</MenuItem>
                                {/* <MenuItem onClick={() => { navigate(`/profile/${id}`) }}>My account</MenuItem> */}
                                <MenuItem onClick={handleLogout}>Log out</MenuItem>
                            </Menu>
                        </div>
                    ) : (
                        <div>
                            <Button onClick={() => { navigate("/register") }} variant="contained">Register</Button>
                            <Button onClick={() => { navigate("/login") }} variant="contained">Login</Button>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    );
}


