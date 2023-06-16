import React, { Children, useState } from "react";
import Header from "./src/Header";
import Login from "./src/Login";
import About from "./src/About";
import Logout from "./src/Logout";
import Protected from "./Protected";
import AssetsDash from "./src/Assets/AssetsDash";
import { useRoutes } from "react-router-dom";
import Category from "./src/Category/Category";
import Assign from "./src/Assign/Assign";
import Employee from "./src/Employees/Employee";
import Department from "./src/Department/Department";
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
          element: <AssetsDash />,
        },
        {
          path: "logout",
          element: <Logout logout={logout} />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "category",
          element: <Category />,
        },
        {
          path: "assign",
          element: <Assign />,
        },
        {
          path: "employees",
          element: <Employee />,
        },
        {
          path: "department",
          element: <Department />,
        },
      ],
    },
  ]);
  return <div>{elements}</div>;
}
export default App;
