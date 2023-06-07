import "../css/login.css";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import image2 from "../images/img4.jpeg";
import "../css/login.css";
import loginComponent from "../component-css/loginComponent";
const adminData = () => {
  return { email: "", passwd: "" };
};
export default function Login() {
  const [admin, setAdmin] = useState(() => adminData());
  const [msg, setmsg] = useState("");
  const navigate = useNavigate();
  const check = () => {
    axios
      .post("http://localhost:3001/login", admin)
      .then((res) => {
        console.log(res);
        if (res.data.status == "success") {
          navigate("/");
          
        } else {
          setmsg("email and password incoreect");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const setData = (e) => {
    if (e.target.name == "email") {
      setAdmin({ ...admin, email: e.target.value });
    } else {
      setAdmin({ ...admin, passwd: e.target.value });
    }
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-6">
          <img
            src={image2}
            style={{
              backgroundRepeat: " no-repeat",
              backgroundAttachment: "fixed",
              width: "750px",
              height: "750px",
            }}
          ></img>
        </div>
        <div className="col-6" style={loginComponent}>
          <div>
            <label style={{ paddingBottom: "40px" }}>Login</label>
          </div>
          <div
            className="input-group mb-3"
            style={{ padding: "15px", width: "max-content" }}
          >
            <input
              type="email"
              className="form-control"
              placeholder="email"
              onChange={setData}
              name="email"
            />
          </div>
          <div
            className="input-group mb-3"
            style={{ padding: "15px", width: "max-content" }}
          >
            <input
              onChange={setData}
              name="password"
              type="password"
              className="form-control"
              placeholder="password"
            />
          </div>
          <div>
            <button className="btn btn-primary" onClick={() => check()}>
              Login
            </button>
          </div>
          <div>
            <label style={{ color: "red", marginTop: "10px" }}>{msg}</label>
          </div>
        </div>
      </div>
    </div>
  );
}
