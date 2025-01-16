import React from "react";
import { Heading } from "../component/headind"; 
import { SubHeading } from "../component/SubHeading";
import { InputBox } from "../component/InputBox";
import { Button } from "../component/Button";
import { BottomWarning } from "../component/BottomWarning";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import { useState } from "react";
export function Signin() {
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    const navigate=useNavigate();
    return (
      <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg border">
        <Heading signup="Signin Page" />
        <form className="space-y-4 mt-6">
         <div>
          <SubHeading label="Enter Your Username And Password For Signin"></SubHeading>
         </div>
         <div>
         <InputBox  onChange={(e) =>setUsername(e.target.value)} label="Username" placeholder="Dhirukumar@gmail.com" ></InputBox>
         </div>
          <div>
          <InputBox onChange={(e) =>setPassword(e.target.value)} label="Password" placeholder="Enter Your Password" ></InputBox>
          </div>
          <br></br>
         <div>
  <Button label="Signin" onClick={async ()=>{
        const response=await axios.post("http://localhost:3000/api/v1/user/signin",{
            username,
            password
        })
        localStorage.setItem("token",response.data.token)
        navigate("/dashboard")
      }}></Button>
         </div>
         <div>
          <BottomWarning label="You do not have a account?" buttonText="Signup page" to="/signup"></BottomWarning>
         </div>
        </form>
      </div>
    );
  }
  