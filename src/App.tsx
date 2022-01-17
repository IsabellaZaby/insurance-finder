import React, {useState} from "react";
import "./App.css";
import DashboardAppBar from "./components/DashboardAppBar";
import StepOne from "./components/StepOne";
import {Outlet, useLocation} from "react-router-dom";
import {createTheme, ThemeProvider} from "@mui/material";
import DrawerMenu from "./components/DrawerMenu";

function App() {
    const location = useLocation();
    const className = location?.pathname === '/stepFive' ? "content five" : "content";
    const [open, setOpen] = useState(false);

    const theme = createTheme({
        palette: {
            primary: {
                light: '#757ce8',
                main: '#3f50b5',
                dark: '#002884',
                contrastText: '#fff',
            },
            secondary: {
                light: '#ff7961',
                main: '#f44336',
                dark: '#ba000d',
                contrastText: '#000',
            },
        },
    });

    const handleDrawerOpen = () => setOpen(!open);
    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <header className="App-header">
                    <DrawerMenu open={open} setOpen={setOpen}/>
                    <DashboardAppBar handleDrawerOpen={handleDrawerOpen}/>
                </header>
                <div className={className}>
                    {location.pathname === "/" && <StepOne/>}
                    <Outlet/>
                </div>
            </div>
        </ThemeProvider>
    );
}

export default App;
