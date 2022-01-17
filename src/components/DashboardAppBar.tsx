import { FC } from "react";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

interface IDashboardAppBar {
    handleDrawerOpen: () => void;
}

const DashboardAppBar: FC<IDashboardAppBar> = ({handleDrawerOpen}) => {
    return (
        <AppBar position="fixed">
            <Toolbar>
            <Typography variant="h6" component="div" sx={{flexGrow: 1, textAlign: 'start'}}>
                    Versicherungsfinder
                </Typography>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{mr: 2, padding: 0, margin: 0}}
                    onClick={handleDrawerOpen}
                >
                    <MenuIcon/>
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default DashboardAppBar;
