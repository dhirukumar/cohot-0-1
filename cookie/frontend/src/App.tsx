// import React from "react";
import { Signin } from "./component/signin";
import { User } from "./component/user";
import { Logout } from "./component/logout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <Router>
      <div>
        <h1>Welcome to the User Management App</h1>
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/user" element={<User/>} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </div>
    </Router>
  );
};


export default App;






//all notes https://projects.100xdevs.com/tracks/Auth/auth-6