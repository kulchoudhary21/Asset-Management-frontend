import React, { useState } from "react";
import Header from "./src/Header";
import Login from "./src/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./src/About";
import Logout from "./src/Logout";
import Protected from "./Protected";
function App() {
  const [isLogin, setIsLogin] = useState(false);
  const login = () => {
    setIsLogin(true);
  };
  const logout = () => {
    setIsLogin(false);
  };
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/dash">
            <Protected Cmp={Header} isLogin={isLogin}></Protected>
          </Route>
          <Route path="/about">
            <Protected Cmp={About} isLogin={isLogin}></Protected>
          </Route>
          <Route path="/logout" element={<Logout></Logout>}></Route>
          <Route
            path="/login"
            element={<Login login={login} isLogin={isLogin}></Login>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
