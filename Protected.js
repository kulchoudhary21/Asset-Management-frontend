import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom';

function Protected({Cpm,isLogin}) {
    const navigate = useNavigate();
    useEffect(() => {
      console.log(isLogin);
      if (isLogin) {
        navigate("/login");
      }
      // else if()
    }, [isLogin]);
    return (
      <Outlet/>
  )
}

export default Protected