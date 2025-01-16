
import React, { useEffect, useState } from "react";
import axios from "axios";
import {UpdateButton} from "./updatebutton"
export const Balance = () => {
const [balance, setBalance] = useState(0);

    useEffect(() => {
        const fetchBalance = async () => {
            try {
                const response = await axios.get("http://localhost:3000/api/v1/account/balance", {
                    headers: { Authorization: "Bearer " + localStorage.getItem("token") },
                });
                setBalance(response.data.balance); // Update balance state
            } catch (error) {
                console.error("Error fetching balance:", error);
            }
        };
        fetchBalance(); // Call the async function
    },[balance]); // Empty dependency array ensures this only runs once when the component mounts

    return (
        <div className="flex justify-between">
            <div className="font-bold text-lg mt-2 ml-1">
                Your balance
            </div>
            <div className="font-semibold ml-4 text-lg mt-2 mr-">
                Rs {balance}
            </div>
            <div>
            <div className="ml-20 mt-2 mr-1">
            <UpdateButton></UpdateButton>
            </div>
            </div>
        </div>
    );
};

