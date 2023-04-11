import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  useParams
} from "react-router-dom";
import Login from './pages/Login'
import Register from './pages/Register'
import Home from "./pages/Home";
import ChatSection from "./pages/ChatSection";
import Questions from "./pages/Questions";
import Welcome from "./pages/Welcome";
import SearchInput from "./components/SearchInput";

import axiosInstance from "./axios";
import Chat from "./pages/Chat";
import Logout from "./pages/Logout";

export default function App() {
  const [data, setData] = useState(null)
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if(localStorage.getItem('access_token')) {
  //       axiosInstance
  //         .get(
  //           "me",
  //         ).then(function(request) {setData(request.data)})
  //     }}, 5000)
  //   return () => clearInterval(interval);
  // }, [])
useEffect(() => {
  axiosInstance
          .get(
            "me",
          ).then(function(request) {setData(request.data)})
}, [])

  return (
    <Router>
        <nav className="flex items-center py-4 justify-between px-8">
          <Link onClick={() =>{/*!data&&localStorage.clear()*/}} to='/chats'>Chats</Link>
          <div><Link to='/login'>Login</Link>/<Link to='/register'>Register</Link></div>
          {/* <div><Link to='/login'>{!data?"Login":"Logout"}</Link>{!data?"/":""}<Link to='/register'>{!data?"Register":""}</Link></div> */}
        </nav>
        <Routes>
          <Route path="/" element={<Home user={data} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/chats">
            <Route index element={<ChatSection user={data} />} />
            <Route path=":chatId" element={<Chat user={data} />} />
          </Route>
          <Route path="/questions" element={<Questions />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
    </Router>
  );
}

















// import './App.css';
// // import axiosInstance from './axios'
// import Login from './components/Login'

// function App() {
//   return (
//     <div>
//       <Login />
//     </div>
//   )
// }

// export default App;

// // LOGIN
    // axiosInstance
    //   .post(
    //     "token/", {username: "BawerMY222", password: "root"}
    //   ).then(function(request) {
    //     localStorage.setItem('access_token', request.data.access)
    //     localStorage.setItem('refresh_token', request.data.refresh)
    //     axiosInstance.defaults.headers['Autorization'] =
    //     "JWT " + localStorage.getItem("access_token")
    //   })

//   // get:
//   // axiosInstance
//   // .get(
//   //   "me",
//   // ).then(function(request) {console.log(request.data)})

//   // post:
//   // .post(
//   //   "me", {
//   //     post data object format
//   //   }
//   // ).then(function(request) {console.log(request.data)})
