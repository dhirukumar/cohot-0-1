import { Routes,BrowserRouter,Route } from "react-router-dom"
import {Signup} from "./pages/signup"
import { Signin } from "./pages/signin"
import { Dashboard } from "./pages/dashboard"
import { Send } from "./pages/send"
import {UpdatePage} from "./pages/updatepage"
function App() {

  return (
    <div>
   <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin/>} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/send" element={<Send />} />
          <Route path="/update" element={<UpdatePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
