import MyNavLink from "./component/MyNavLink";
import {Fragment} from "react";
import {Route, Routes,Navigate} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";


function App(){
    return (
        <Fragment>
            <div>
                <MyNavLink to="/home">Home</MyNavLink><br/>
                <MyNavLink to="/about">About</MyNavLink>
            </div>
            <div>
                <Routes>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/" element={<Navigate to="/about"/>}/>
                </Routes>
            </div>
        </Fragment>
    )
}
export default App;