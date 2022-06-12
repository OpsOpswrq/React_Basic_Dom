import {NavLink,Outlet} from "react-router-dom";

function Home(){
    return (
        <div>
            <h1>Home...</h1>
            <NavLink to="news" className="router">News</NavLink><br/>{/*带了斜杠就是当前的网址根路径*/}
            <NavLink to="messages" className="router">Messages</NavLink>
            <Outlet/>
        </div>
    )
}
export default Home;