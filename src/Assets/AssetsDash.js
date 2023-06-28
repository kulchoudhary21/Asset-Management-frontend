import React, { useEffect, useState } from "react";
import Header from "../Header";
import AssetsCard from "./AssetsCard";
import "../../css/assets.css";
import logo from "../../img/logo.png";
import axios from "axios";

function AssetsDash() {
  const [assignLength, setAssignLength] = useState();
  const [categoryLength, setCategoryLength] = useState();
  const [EmployeenLength, setEmployeeLength] = useState();
  const [DepartmentLength, setDepartmentLength] = useState();
  async function getDataAssign() {
    await axios
      .get("http://localhost:3001/getAssign")
      .then((resp) => {
        setAssignLength(resp.data.data.length);
      })
      .catch((err) => {
        // http://localhost:3001/getDepartment
        // http://localhost:3001/getEmployee
        // "http://localhost:3001/assetGetCategory"
      });
  }
  async function getDataDepartment() {
    await axios
      .get("http://localhost:3001/getDepartment")
      .then((resp) => {
        setDepartmentLength(resp.data.data.length);
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  }
  async function getDataCategory() {
    await axios
      .get("http://localhost:3001/assetGetCategory")
      .then((resp) => {
        setCategoryLength(resp.data.data.length);
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  }
 async function getDataEmployee() {
    await axios
      .get("http://localhost:3001/getEmployee")
      .then((resp) => {
        setEmployeeLength(resp.data.data.length);
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  }
  useEffect(() => {
    getDataAssign();
    getDataDepartment();
    getDataEmployee();
    getDataCategory();
  }, []);

  return (
    <div className="main">
      <Header />
      <div
        className="container-fluid row"
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          padding: "30px",
        }}
      >
        <div className="col-12 struct" style={{ color: "aliceblue" }}>
          <center>
            <h1>
              <img
                src={logo}
                className="mb-2"
                style={{ backgroundColor: "aliceblue" }}
              />
            </h1>
          </center>
          <h4>WELCOME TO CONSULTING ASSET MANAGEMENT</h4>
          <br />
        </div>
        <div className="col-6 mb-5 cl">
          <AssetsCard
            title="Asset Assign"
            link="/assign"
            total={`Total asset assign = ${assignLength}`}
            desc="which asset assign to employee with their model and issue date for a particular employee"
          />
        </div>
        <div className="col-6 cl">
          <AssetsCard
            title="Employee"
            desc="Every employee details of comapany with their details and department category"
            link="/employees"
            total={`Total employees in company = ${EmployeenLength}`}
          />
        </div>
        <div className="col-6 cl">
          <AssetsCard
            title="Category"
            desc="how many category and also creates new categories for the particular it shows particular assets awailable to alot or assign"
            link="/category"
            total={`Total assets available = ${categoryLength}`}
          />
        </div>
        <div className="col-6 cl">
          <AssetsCard
            title="department"
            desc="department awailable in the company "
            link="/department"
            total={`Department = ${DepartmentLength}`}
          />
        </div>
      </div>
    </div>
  );
}

export default AssetsDash;
