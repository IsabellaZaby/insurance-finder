import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import StepTwo from "./components/StepTwo";
import StepThree from "./components/StepThree";
import StepFour from "./components/StepFour";
import StepFive from "./components/StepFive";
import Privacy from "./components/Privacy";

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<App/>}>
                    <Route path="stepTwo" element={<StepTwo/>}/>
                    <Route path="stepThree" element={<StepThree/>}/>
                    <Route path="stepFour" element={<StepFour/>}/>
                    <Route path="stepFive" element={<StepFive/>}/>
                    <Route path="datenschutz" element={<Privacy/>}/>
                </Route>
            </Routes>
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();