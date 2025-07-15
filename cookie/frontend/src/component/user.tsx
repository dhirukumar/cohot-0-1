import { useState, useEffect } from 'react';
import axios from 'axios';

export const User = () => {
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    axios.get('http://localhost:3000/user', {
      withCredentials: true,
    })
      .then((res) => {
        setUserId(res.data.userId);
      
      })
      .catch((err) => {
        console.error("Error fetching user:", err);
      });
  }, []);

  return (
    <div>
      <h2>User Info</h2>
      {userId ? <p>User ID: {userId}</p> : <p>Loading...</p>}
    </div>
  );
};
