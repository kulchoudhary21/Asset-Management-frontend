import React, { useState, useEffect } from "react";
import Header from "../Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import EmployeePop from "./createEmployee";
const assetCategory = () => {
  return { assetCategory: "", isDelete: "false" };
};
const editCategory1 = () => {
  return { assetCategory: "" };
};
function Employee() {
  const [asset, setAsset] = useState(() => assetCategory());
  const [data, setData] = useState();
  const [editData, setEditData] = useState(() => editCategory1());
  const [idd, setid] = useState();
  const navigate = useNavigate();

  async function addCategory() {
    console.log(asset);
    if (asset && asset.assetCategory) {
      await axios
        .post("http://localhost:3001/createDepartment", asset)
        .then((resp) => {
          setData(resp);
          navigate("/employees");
        })
        .catch((err) => {
          console.log("err", err);
        });
      await axios
        .get("http://localhost:3001/getDepartment")
        .then((resp) => {
          setData(resp);
          navigate("/employees");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  async function editFun(id) {
    console.log(id, "cc");
    if (editData && editData.assetCategory) {
      await axios
        .put(`http://localhost:3001/editDepartment/${id}`, editData)
        .then((resp) => {
          console.log(resp);
          setData(resp);
          fetchInfo();
        })
        .catch((err) => {
          console.log("err", err);
        });
    }
  }
  const delet = (id) => {
    axios
      .put(`http://localhost:3001/deleteDepartment/${id}`)
      .then((resp) => {
        fetchInfo();
        navigate("/employees");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  function fetchInfo() {
    axios
      .get("http://localhost:3001/getDepartment")
      .then((resp) => {
        setData(resp);
        navigate("/employees");
      })
      .catch((err) => {
        console.log("Err", err);
      });
  }
  useEffect(() => {
    fetchInfo();
  }, []);

  function onAdded(e) {
    setAsset({ ...asset, assetCategory: e.target.value });
  }
  function onEdit(e) {
    setEditData({ ...editData, assetCategory: e.target.value });
  }
  {
    /* return (
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
        </div> */
  }

  return (
    <div>
      <Header />
      <div className="row">
        <div className="col-8">
          <h5>Employees</h5>
          <table className="table" key={1}>
            <thead className="table-info">
              <tr>
                <th>Name</th>
                <th>gender</th>
                <th>department</th>
                <th>Records</th>
                <th>Delete</th>
                <th>edit</th>
              </tr>
            </thead>
            {data && data.data.data !== undefined ? (
              <tbody>
                {data.data.data.map((item, index) => (
                  <tr className="table-secondary">
                    {item.isDelete == "false" ? (
                      <>
                        <td className="table-success"></td>
                        <td className="table-success"></td>
                        <td className="table-success"></td>
                        <td className="table-success"></td>
                        <td>
                          <button
                            className="btn btn-success"
                            type="button"
                            onClick={() => delet(item.id)}
                          >
                            delete
                          </button>
                        </td>
                        <td>
                          <button
                            type="button"
                            onClick={() => setid(item.id)}
                            className="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal1"
                          >
                            edit
                          </button>
                        </td>
                      </>
                    ) : null}
                  </tr>
                ))}
              </tbody>
            ) : null}
          </table>
        </div>
        <EmployeePop onAdded={onAdded} addCategory={addCategory} />
      </div>
      <div>
        <div
          className="modal fade"
          id="exampleModal1"
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
                    className="form-control"
                    placeholder="Asset name"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    onChange={onEdit}
                  />
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
                  onClick={() => editFun(idd)}
                  data-bs-dismiss="modal"
                >
                  Save changes
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
