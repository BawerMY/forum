import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  redirect,
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
  useEffect(() => {
      if(localStorage.getItem('access_token')) {
        axiosInstance
          .get(
          "me",
          ).then(function(request) {setData(request.data)})
      }
      else {
        // redirect("/welcome")
      }
    }, [])
  return (
    <Router>
        {/* <nav className="flex items-center h-[90px]">
          <div className="flex items-center">
            <img className="h-9" src="imgs\logo+name.svg" alt="ForLens" />
            <div className="flex items-center">
            <Link to='/'>Dashboard</Link>
            <div className="w-px h-full mx-8 bg-[#CCCCCC14]"></div>
            <Link to='/chat'>Chat</Link>
            <div className="w-px h-full mx-8 bg-[#CCCCCC14]"></div>
            <Link to='/questions'>Domande</Link>
            </div>
          </div>
        </nav> */}
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
//   // axiosInstance
//   //   .post(
//   //     "token/", {username: "BawerMY222", password: "root"}
//   //   ).then(function(request) {
//   //     localStorage.setItem('access_token', request.data.access)
//   //     localStorage.setItem('refresh_token', request.data.refresh)
//   //     axiosInstance.defaults.headers['Autorization'] =
//   //     "JWT " + localStorage.getItem("access_token")
//   //   })

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
