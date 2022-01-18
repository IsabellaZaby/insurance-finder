import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {HashRouter as Router, Route, Routes} from "react-router-dom";
import StepTwo from "./components/StepTwo";
import StepThree from "./components/StepThree";
import StepFour from "./components/StepFour";
import StepFive from "./components/StepFive";
import Privacy from "./components/Privacy";
import Impressum from "./components/Impressum";
import {initBreakpoints} from "react-match-breakpoints";

const breakpointsConfig = {
    mobile: 'screen and (max-width: 767px)',
    tablet: 'screen and (min-width: 768px) and (max-width: 1024px)'
}

const BreakpointsProvider = initBreakpoints(breakpointsConfig);

ReactDOM.render(
    <React.StrictMode>
        <BreakpointsProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<App/>}>
                        <Route path="stepTwo" element={<StepTwo/>}/>
                        <Route path="stepThree" element={<StepThree/>}/>
                        <Route path="stepFour" element={<StepFour/>}/>
                        <Route path="stepFive" element={<StepFive/>}/>
                        <Route path="datenschutz" element={<Privacy/>}/>
                        <Route path="impressum" element={<Impressum/>}/>
                    </Route>
                </Routes>
            </Router>
        </BreakpointsProvider>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
