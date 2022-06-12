// import {useParams,useMatch} from "react-router-dom";

// import {useLocation, useSearchParams} from "react-router-dom";

import {useLocation} from "react-router-dom";

function Details(){
    // const {id,title,content} = useParams()
    // const element = useMatch("/home/messages/details/:id/:title/:content")  // 路径解析
    // console.log(element)
    // const [search,setSearch] = useSearchParams()
    // const id = search.get('id')
    // const title = search.get('title')
    // const content = search.get('content')
    // const x = useLocation()
    // console.log(x)
    const {state:{id,title,content}} = useLocation()
    return (
        <div>
            {/*<button onClick={()=>{setSearch("id=003&title=nis&content=dsa")}}>点我更新</button>*/}
            <ul>
                <li>id:{id}</li>
                <li>title:{title}</li>
                <li>content:{content}</li>
            </ul>
        </div>
    )
}
export default Details;