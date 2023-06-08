import React, { Children, useState } from "react";
import Header from "./src/Header";
import Login from "./src/Login";
import About from "./src/About";
import Logout from "./src/Logout";
import Protected from "./Protected";
import Assets from "./src/Assets/Assets";
import { useRoutes } from "react-router-dom";
function App() {
  const [isLogin, setIsLogin] = useState(false);
  const login = () => {
    setIsLogin(true);
  };
  const logout = () => {
    setIsLogin(false);
  };

  const elements = useRoutes([
    {
      path: "/",
      element: <Protected isLogin={isLogin} />,
      children: [
        {
          path: "/",
          element: <Login login={login} />,
        },
        {
          path: "home",
          element: <Assets />,
        },
        {
          path: "logout",
          element: <Logout logout={logout} />,
        },
        {
          path: "about",
          element: <About />,
        },
      ],
    },
  ]);
  return <div>{elements}</div>;
}
export default App;
