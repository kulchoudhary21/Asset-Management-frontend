import React, { useState } from "react";
import Header from "./src/Header";
import Login from "./src/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const [isLogin,setIsLogin]=useState(null);
  
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/login" element={<Login></Login>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;