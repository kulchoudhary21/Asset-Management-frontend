import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout({ logout }) {
  const navigate=useNavigate()
  useEffect(() => {
    logout();
    navigate("/")
  }, []); 
  return <div key={1}></div>;
}

export default Logout;
