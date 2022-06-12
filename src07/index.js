import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {HashRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        {/*全体包裹，实现全体路由*/}
        <HashRouter>
            <App/>
        </HashRouter>
    </React.StrictMode>
)