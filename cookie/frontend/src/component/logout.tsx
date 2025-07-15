import axios from "axios"
import { useState } from "react"
export const Logout=()=>{
    const [mess, setmesss] = useState();
    return (
        <div>
            <h2>Logout</h2>
            <p>Click the button below to log out.</p>
            <button 
onClick={()=>{
axios.post("http://localhost:3000/logout", {withCredentials:true}
).then((res)=>{
    setmesss(res.data.message);
})
}}
>logout</button>
<h2>{mess}</h2>
        </div>
    )
}