import React, { useState } from "react";
import { Heading } from "../component/headind"; 
import { SubHeading } from "../component/SubHeading";
import { InputBox } from "../component/InputBox";
import { Button } from "../component/Button";
import { BottomWarning } from "../component/BottomWarning";
import { useNavigate } from "react-router-dom";
import axios from "axios"

export function Signup() {
    const navigate=useNavigate();
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg border">
      <Heading signup="Signup Page" />
      <form className="space-y-4 mt-6">
       <div>
        <SubHeading label="Enter Your Username And Password For Signup"></SubHeading>
       </div>
       <div>
       <InputBox onChange={(e)=>{
        setUsername(e.target.value)
       }} label="Username" placeholder="Dhirukumar@gmail.com" ></InputBox>
       </div>
        <div>
        <InputBox onChange={(e)=>{
            setPassword(e.target.value)
        }} label="Password" placeholder="Enter Your Password" ></InputBox>
        </div>
        <br></br>
       <div>
      <Button  label="Signup" onClick={async ()=>{
        const response=await axios.post("http://localhost:3000/api/v1/user/signup",{
            username,
            password
        });
        localStorage.setItem("token",response.data.token)
        navigate("/dashboard")
      }}></Button>
       </div> 
       <div>
        <BottomWarning label="You already have a account?" buttonText="Sign page" to="/signin"></BottomWarning>
       </div>
      </form>
    </div>
  );
}


















