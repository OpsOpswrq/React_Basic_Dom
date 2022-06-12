import React,{Component} from "react";
import Count from "./containers/Count";
import Person from "./containers/Person";
// import Store from "./redux/store";

class App extends Component{
    render(){
        return (
            <div>
                <Count/> {/*props传递store参数*/}
                <hr/>
                <Person/>
            </div>
        )
    }
}
export default App;