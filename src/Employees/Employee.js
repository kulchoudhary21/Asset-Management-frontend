import React, { useState } from "react";
import Header from "../Header";
import axios from "axios";
const getEmployees = () => {
  return { name: "", gender: "", depart: "" };
};
function Employee() {
  const [data, setData] = useState(() => getEmployees());
  const addemployee = () => {
    console.log(data);
    if (data) {
        console.log(data)
      axios
        .post("http://localhost:3001/createEmployee", data)
        .then((resp) => {
          console.log(resp);
        })
        .catch((err) => {   
          console.log("err:", err);
        });
    }
  };
  const onAdded = (e) => {
    if (e.target.name == "name") {
      setData({ ...data, name: e.target.value });
    }
    if (e.target.name == "gender") {
      setData({ ...data, gender: e.target.value });
    }
    if (e.target.name == "depart") {
      setData({ ...data, depart: e.target.value });
    }
  };
  return (
    <div>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <div className="col-10">
            <label>Employees</label>
          </div>
          <div className="col-2">
            <button
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              style={{ marginTop: "10px", marginBottom: "10px" }}
            >
              Add Employee
            </button>
          </div>
          <div className="col-6">
            <table className="table table-primary">
              <thead className="table-info">
                <tr>
                  <th>id</th>
                  <th>Name</th>
                  <th>gender</th>
                  <th>department</th>
                  <th>Records</th>
                </tr>
              </thead>
              <tbody>
                <tr className="table-secondary">
                  <td className="table-success">1</td>
                  <td className="table-success">Kuldeep</td>
                  <td className="table-success">male</td>
                  <td className="table-success">js</td>
                  <td className="table-success">0</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* pop to create employee */}
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Employee
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="name"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    onChange={onAdded}
                  />
                </div>
                <div>
                  <select
                    className="form-select"
                    defaultValue={"DEFAULT"}
                    onChange={onAdded}
                    name="gender"
                  >
                    <option value="DEFAULT" disabled>
                      Select gender
                    </option>
                    <option value="male">male</option>
                    <option value="female">female</option>
                  </select>
                </div>
                <div>
                  <select
                    className="form-select mt-4"
                    defaultValue={"DEFAULT"}
                    onChange={onAdded}
                    name="depart"
                  >
                    <option value="DEFAULT" disabled>
                      Select Department
                    </option>
                    <option value="react">React</option>
                    <option value="node">Node</option>
                    <option value="angular">Angular</option>
                    <option value="android">Android</option>
                    <option value="designer">Designer</option>
                    <option value="python">Python</option>
                    <option value="flutter">Flutter</option>
                  </select>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => addemployee()}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Employee;
