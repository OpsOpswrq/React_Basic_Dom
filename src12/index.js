import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Store from "./redux/store";
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render( // 初始化render
    <React.StrictMode>
        <Provider store={Store}>
            <App />
        </Provider>
    </React.StrictMode>
)
// Store.subscribe(()=>{ // 当redux里的内容被修改了才会调用这个函数
//     root.render(
//         <React.StrictMode>
//             <App/>
//         </React.StrictMode>
//     )
// })