import Singup from "./Authentication/Singup"
import Login from "./Authentication/Login"
import { AuthProvider } from "../context/AuthContext"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Updateprofile from "./Authentication/Updateprofile"
import Profile from "./Authentication/Profile"
import PrivateRoute from "./Authentication/PrivateRoute"
import Forgotpassword from "./Authentication/Forgotpassword"
import Dashboard from "../Drive/Dashboard"


function App() {

  return (
         <Router>
          <AuthProvider>
            <Routes>
              {/* {Drive} */}
              <Route exact path="/" element = { <PrivateRoute>
                                                <Dashboard/>
                                                </PrivateRoute>} />


              {/* {Profile} */}
              <Route path="/user" element = { <PrivateRoute>
                                                <Profile/>
                                                </PrivateRoute>} />
              <Route path="/update-profile" element = { <PrivateRoute>
                                                <Updateprofile/>
                                                </PrivateRoute>} />
              {/* {Auth} */}
              <Route path="/signup" element = { <Singup/>} />
              <Route path="/login" element = { <Login/>} />
              <Route path="/forgot-password" element = { <Forgotpassword/>} />
              <Route path="/update-profile" element = { <Updateprofile/>} />
            </Routes>
          </AuthProvider>
         </Router>
  )
}

export default App
