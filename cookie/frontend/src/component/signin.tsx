// import React from "react";
import { useState } from "react";
import axios from "axios";
export const Signin=()=>{
    const [email, setemail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div>
            <input onChange={
                (e) => {
                    setemail(e.target.value);
                }
            } value={email} placeholder="email"></input>
            
            <input onChange={(e)=>{
                setPassword(e.target.value);
            }} placeholder="password" type="password"></input>
            <button onClick={()=>{
                axios.post("http://localhost:3000/signin", {
                    email,
                    password
                }, {
                    withCredentials: true
                }).then((res) => {
                    console.log(res.data);
                }).catch((err) => {
                    console.error(err);
                });
            }}
            >signin</button>

        </div>
    )
}

