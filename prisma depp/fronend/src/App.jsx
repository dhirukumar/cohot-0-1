import { useState } from 'react';
import './App.css';
import { Routes, BrowserRouter, Route } from "react-router-dom";
import axios from "axios"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/Dashboard" element={<Dashbod/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Dashbod() {
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  

  const handleSubmit = async () => {
   
    try {
      await axios.post("http://localhost:3000/api/dashboard",{
        name: name,
        email: email
      });
      alert('Data submitted successfully!');
    } catch (error) {
      alert('Error submitting data');
      console.error(error);
    } 
  };

  return (
    <div style={{backgroundColor:"black", padding: "20px", color: "white"}}>
      <input
        placeholder='name'
        value={name}
        onChange={(e) => setname(e.target.value)}
        style={{ width: "300px", height: "40px", fontSize: "20px", marginBottom: "10px" }}
      />
      <br />
      <input
        placeholder='email'
        value={email}
        onChange={(e) => setemail(e.target.value)}
        style={{ width: "300px", height: "40px", fontSize: "20px", marginBottom: "20px" }}
      />
      <br />
      <button 
        onClick={handleSubmit} 
      >click
      </button>
    </div>
  );
}

export default App;
