import {useNavigate} from "react-router-dom";
import {Fragment} from "react";

function Header(){
    const navigate = useNavigate()
    function back(){
        navigate(-1)
    }
    function forward(){
        navigate(1)
    }
    return (
        <Fragment>
            <h1>React_Router_Dom</h1>
            <button onClick={back}>ει</button>
            <button onClick={forward}>εθΏ</button>
        </Fragment>

    )
}
export default Header;