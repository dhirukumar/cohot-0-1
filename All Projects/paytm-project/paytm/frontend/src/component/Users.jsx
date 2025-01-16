
import { useEffect, useState } from "react";
import { Button } from "./Button";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

export const Users = () => {
    const [users, setUsers] = useState([]);
    const [filter,setFilter]=useState("")

//you need to add debouncing in real world
    // Fetch users from the backend
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get("http://localhost:3000/api/v1/user/bulk?filter="+filter);
                setUsers(response.data.user || []); 
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };
        fetchUsers();
    }, [filter]);

    return (
        <>
            <div className="font-bold mt-6 text-lg">Users</div>
            <div className="my-2">
                <input onChange={(e)=>{
                    setFilter(e.target.value)
                   }}
                    type="text"
                    placeholder="Search users..."
                    className="w-full px-2 py-1 border rounded border-slate-200"
                />
            </div>
            <div>
                {users.map((user) => (
                    <User  user={user} />
                ))}
            </div>
        </>
    );
};

function User({ user }) {
    const navigate = useNavigate();
    return (
        <div className="flex justify-between mb-4">
            <div className="flex">
                <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center items-center mt-1 mr-2">
                    <div className="text-xl">{user.username[0]}</div>
                </div>
                <div className="flex flex-col justify-center">
                    <div>{user.username}</div>
                </div>
            </div>

            <div className="flex flex-col justify-center">
                <Button label="Send Money" onClick={()=>{navigate("/send?id="+user._id + "&name=" + user.username)}}/>
            </div>
        </div>
    );
}


