import React from "react";
import "./App.css";
import DashboardAppBar from "./components/DashboardAppBar";
import StepOne from "./components/StepOne";
import {Outlet, useLocation} from "react-router-dom";

function App() {
    const location = useLocation();
    return (
        <div className="App">
            <header className="App-header">
                <DashboardAppBar/>
            </header>
            <div className="content">
                {location.pathname === "/" && <StepOne/>}
                <Outlet/>
            </div>
        </div>
    );
}

export default App;
