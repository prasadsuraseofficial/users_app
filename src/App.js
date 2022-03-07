import "./App.css"
import Home from "./pages/Home"
import AddUserForm from "./pages/AddUserForm"
import EditUserForm from "./pages/EditUserForm"

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"

function App() {
  return(
    <div className="container">
      <BrowserRouter>

        <Navbar />

        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/add-user" element={<AddUserForm />} />

          <Route path="/edit-user/:userId" element={<EditUserForm />} />
          
          <Route path="*" element={
            <h1 style={{color: "red", textAlign: "center"}}>
              404 : PAGE NOT FOUND!
            </h1>
          } />

        </Routes>
      </BrowserRouter>
    </div>  
  )
}

export default App;