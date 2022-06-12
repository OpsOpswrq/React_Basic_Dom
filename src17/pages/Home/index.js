import {useState} from "react";
import {Navigate} from "react-router-dom";

function Home(){
    const [sum,setSum] = useState(1)
    function addOne(){
        setSum((sum)=>{return sum+1})
    }
    return (
        <div>
            <h1>Home...</h1>
            {sum===2 ? <Navigate to="/about" replace={false}/>:<h3>当前和为:{sum}</h3>}  {/*响应式布局*/}
            <button onClick={addOne}>点我加一</button>
        </div>
    )
}
export default Home;