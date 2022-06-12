import Home from "../pages/Home";
import About from "../pages/About";
import {Navigate} from "react-router-dom";
import Messages from "../pages/Home/Messages";
import News from "../pages/Home/News";
import Details from "../pages/Home/Messages/details";

const routers = [
    {
        path:'/home',
        element:<Home/>,
        children:[
            {
                path:'messages',
                element:<Messages/>,
                children:[
                    {
                        // path:"details/:id/:title/:content",
                        path:"details",
                        element:<Details/>
                    }
                ]
            },
            {
                path:'news',
                element:<News/>
            },
            {
                path:"",
                element:<Navigate to="/home/news"/>
            }
        ]
    },
    {
        path:'/about',
        element:<About/>
    },
    {
        path:"/",
        element:<Navigate to="/about"/>
    }
]
export default routers;