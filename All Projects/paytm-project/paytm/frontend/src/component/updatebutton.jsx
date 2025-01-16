import React from "react";
import { useNavigate } from "react-router-dom";

export const UpdateButton = () => {
    const navigate=useNavigate();
    return (
        <button
            onClick={()=>{navigate("/update")}}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
        >
            Update
        </button>
    );
};

