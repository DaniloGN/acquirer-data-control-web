import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import {AccountCircle} from "@material-ui/icons";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import {Link} from "react-router-dom";

function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 1 * 3 }}>
            {props.children}
        </Typography>
    );
}

function LinkTab(props) {
    return (
        <Tab
            component="a"
            onClick={event => {
                event.preventDefault();
            }}
            {...props}
        />
    );
}

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    nav:{
        background: 'linear-gradient(90deg, #1c3b65, #1F6382, #40b9bb)'
    },
    tabBar:{
        background: '#1D324B',
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

function PortalNavbar() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [value, setValue] = React.useState(0);
    const open = Boolean(anchorEl);

    function handleMenu(event) {
        setAnchorEl(event.currentTarget);
    }

    function handleClose() {
        setAnchorEl(null);
    }

    function handleChange(event, newValue) {
        setValue(newValue);
    }

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.nav}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Likes
                    </Typography>
                        <div>
                            <IconButton onClick={handleMenu} color="inherit">
                                <AccountCircle/>
                            </IconButton>
                            <Menu
                                id="menu-appbar"
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
                                open={open}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose}>Deslogar</MenuItem>
                            </Menu>
                        </div>
                </Toolbar>
            </AppBar>
            <AppBar position="static" className={classes.tabBar}>
                <Tabs variant="fullWidth" value={value} onChange={handleChange} indicatorColor='primary'>
                    <Tab value={0} containerElement={<Link to="/">Dashboard</Link>}/>
                    <Tab value={1} label="Arquivos" containerElement={<Link to="/files"/>}/>
                </Tabs>
            </AppBar>
            {value === 0 && <TabContainer>Page One</TabContainer>}
            {value === 1 && <TabContainer>Page Two</TabContainer>}
            {value === 2 && <TabContainer>Page Three</TabContainer>}
        </div>
    );
}

export default PortalNavbar;