import {Fragment} from "react";
import {NavLink, useRoutes} from "react-router-dom";
import routers from "./routers";
import Header from "./components/Header";

function App(){ // 在App的根文件下的全路由分配
    const element = useRoutes(routers) // 根据对应的路由表生成对应的路由关系
    return (
        <Fragment>
            <Header/>
            <div>
                {/*<NavLink to="/home" className="router" end>Home</NavLink><br/>  /!*使用函数计算效果*!/*/}
                <NavLink to="/home" className="router">Home</NavLink><br/>
                <NavLink to="/about" className="router">About</NavLink> {/*end的作用就是当子级路由匹配上了就取消父级的高亮效果*/}
            </div>
            <div>
                {element}
            </div>
        </Fragment>
    )
}
export default App;