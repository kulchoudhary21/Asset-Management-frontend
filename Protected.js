import React, { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

function Protected({isLogin}) {
    const navigate = useNavigate();
    const location=useLocation();
    const path=location.pathname;
    console.log(path)
    useEffect(()=>{
      if(isLogin && path=="/"){
        navigate("/home")
      }
      else if(!isLogin && path!="/"){
        navigate("/")
      }
    },[path])
    useEffect(() => {
      console.log(isLogin);
      if (!isLogin && path=="/home") {
        navigate("/");
      }
      else if((isLogin && location.pathname=="/") && path==""){
        navigate("/home")
      }
    }, [isLogin]);
    return (
      <Outlet/>
  )
}

export default Protected