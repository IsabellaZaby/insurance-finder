import {Divider, Drawer, List, ListItem, ListItemIcon, ListItemText} from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import React, {FC} from "react";
import {Link, useLocation} from "react-router-dom";
import {Policy} from "@mui/icons-material";

interface DrawerMenu {
    open: boolean;
    setOpen: (bool: boolean) => void;
}

const DrawerMenu: FC<DrawerMenu> = ({open, setOpen}) => {

    const {pathname} = useLocation();

    return (
        <Drawer
            variant="persistent"
            anchor="right"
            open={open}
            sx={{
                '& .MuiDrawer-paper': {
                    top: '56px',
                    minWidth: '200px'
                }
            }}
        >
            <List>
                <Link to="/" onClick={() => setOpen(false)}>
                    <ListItem selected={pathname === '/'}>
                        <ListItemIcon>
                            <HomeIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Home"/>
                    </ListItem>
                </Link>
                <Link to="/datenschutz" onClick={() => setOpen(false)}>
                    <ListItem selected={pathname === '/datenschutz'}>
                        <ListItemIcon>
                            <Policy/>
                        </ListItemIcon>
                        <ListItemText primary="Datenschutz"/>
                    </ListItem>
                </Link>
            </List>
            <Divider/>
        </Drawer>
    );
};

export default DrawerMenu;
