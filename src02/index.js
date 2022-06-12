// 引入React核心库
import React from "react";
// 引入ReactDOM库
import ReactDOM from "react-dom/client";
// 渲染App组件到容器中去
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)