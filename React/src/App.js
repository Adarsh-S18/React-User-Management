import React from "react";
  import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import Home from './Pages/Home';
import PersonalProfile from "./Pages/PersonalProfile";
import AdminPage from "./Components/AdminPage/AdminPage";
import AddUser from "./Components/AddUser/AddUser";
import AdminLogin from "./Components/Admin/AdminLogin";

function App() {
  return (
    <div >
      <Router >
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/login" element={ <Login/> }/>
          <Route path="/profile" element={ <PersonalProfile />} />
          <Route path="/adminpage" element={<AdminPage />} />
          <Route path="/registeruser" element={<AddUser />}/>
          <Route path="/adminlogin" element={<AdminLogin />} />
       </Routes>
      </Router>

    </div>
  );
}

export default App;
