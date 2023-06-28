import React, { useState, useEffect } from "react";
import Header from "../Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import EmployeePop from "./createEmployee";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import pic from "../../img/noRecord.jpeg";
const assetCategory = () => {
  return { name: "", department: "", gender: "", isDelete: "false" };
};
const editCategory1 = () => {
  return { name: "", department: "", gender: "" };
};
function Employee() {
  const [asset, setAsset] = useState(() => assetCategory());
  const [data, setData] = useState();
  const [editData, setEditData] = useState(() => editCategory1());
  const [depart, setDepart] = useState();
  const [idd, setid] = useState();
  const [dd, setdd] = useState();
  const [records, setRecord] = useState();
  const [serchData, setSearchData] = useState();
  const [show, setShow] = useState(true);
  const navigate = useNavigate();

  async function addCategory() {
    if (asset && asset.name && asset.department && asset.gender) {
      await axios
        .post("http://localhost:3001/createEmployee", asset)
        .then((resp) => {
          setData(resp);
          navigate("/employees");
        })
        .catch((err) => {
          console.log("err", err);
        });
      await axios
        .get("http://localhost:3001/getEmployee")
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
    if (editData && editData.name && editData.gender && editData.department) {
      await axios
        .put(`http://localhost:3001/editEmployee/${id}`, editData)
        .then((resp) => {
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
      .put(`http://localhost:3001/deleteEmployee/${id}`)
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
      .get("http://localhost:3001/getEmployee")
      .then((resp) => {
        setData(resp);
        console.log("jnsj", typeof serchData);
        let arr = [];
        if (resp.data.data && serchData) {
          arr = resp.data.data.filter((item) => {
            return item.name.toLowerCase().includes(serchData.toLowerCase());
          });
        }
        if (arr.length == 0) {
          if (serchData) {
            setShow(false);
          } else {
            setData(resp);
            setShow(true);
          }
        } else {
          setShow(true);
          resp.data.data = arr;
          console.log(resp);
          setData(resp);
        }
        console.log("iwiwiwixwiwix", arr);
        navigate("/employees");
      })
      .catch((err) => {
        console.log("Err", err);
      });
  }
  function fetchDepart() {
    axios
      .get("http://localhost:3001/getDepartment")
      .then((resp) => {
        resp.data.data.map((item) => {
          setdd(item.department);
        });
        setDepart(resp);
        navigate("/employees");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async function getRecords() {
    await axios
      .get("http://localhost:3001/getAssign")
      .then((resp) => {
        setRecord(resp);
        navigate("/employees");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    fetchInfo();
    fetchDepart();
    getRecords();
  }, []);
  useEffect(() => {
    fetchInfo();
  }, [serchData]);
  function onAdded(e) {
    if (e.target.name == "name") setAsset({ ...asset, name: e.target.value });

    if (e.target.name == "department")
      setAsset({ ...asset, department: e.target.value });

    if (e.target.name == "gender")
      setAsset({ ...asset, gender: e.target.value });
  }
  function onEdit(e) {
    if (e.target.name == "name")
      setEditData({ ...editData, name: e.target.value });

    if (e.target.name == "department")
      setEditData({ ...editData, department: e.target.value });

    if (e.target.name == "gender")
      setEditData({ ...editData, gender: e.target.value });
  }
  function func(e) {
    setSearchData(e.target.value);
  }
  return (
    <div>
      <Header func={func} />
      {show ? (
        <div className="row">
          <div className="col-8">
            <h5>Employees</h5>
            <table className="table" key={11}>
              <thead className="table-info">
                <tr>
                  <th>Name</th>
                  <th>gender</th>
                  <th>department</th>
                  <th>Records</th>
                  <th>Action</th>
                </tr>
              </thead>
              {data && data.data.data !== undefined ? (
                <tbody key={1}>
                  {data.data.data.map((item, index) => (
                    <tr className="table-secondary" key={index}>
                      {item.isDelete == "false" ? (
                        <>
                          <td className="table-success">{item.name}</td>
                          <td className="table-success">{item.gender}</td>
                          <td className="table-success">{item.department}</td>
                          <td className="table-success">{item.records}</td>

                          <td>
                            <FontAwesomeIcon
                              icon={faTrash}
                              onClick={() => delet(item.emp_id)}
                              type="button"
                              className="btn btn-primary"
                            />
                            <FontAwesomeIcon
                              style={{ marginLeft: "15px" }}
                              onClick={() => setid(item.emp_id)}
                              icon={faPenToSquare}
                              type="button"
                              className="btn btn-primary"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal1"
                            />
                          </td>
                        </>
                      ) : null}
                    </tr>
                  ))}
                </tbody>
              ) : null}
            </table>
          </div>
          <EmployeePop
            onAdded={onAdded}
            addCategory={addCategory}
            depart={depart}
            dd={dd}
          />
        </div>
      ) : (
        <div style={{ margin: "20px" }}>
          <img
            src={pic}
            style={{
              width: "50%",
              marginLeft: "auto",
              marginRight: "auto",
              display: "block",
            }}
          />
        </div>
      )}

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
                    name="name"
                    className="form-control"
                    placeholder="name"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    onChange={onEdit}
                  />
                </div>
                <div>
                  <select
                    className="form-select"
                    defaultValue={"DEFAULT"}
                    onChange={onEdit}
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
                    onChange={onEdit}
                    name="department"
                  >
                    <option value="DEFAULT" disabled>
                      Select Department
                    </option>
                    {depart && depart.data.data
                      ? depart.data.data.map((item, index) => {
                          if (item.isDelete == "false") {
                            return (
                              <option value={item.department} key={index}>
                                {item.department}
                              </option>
                            );
                          }
                        })
                      : null}
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
