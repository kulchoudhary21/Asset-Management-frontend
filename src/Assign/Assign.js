import React, { useState, useEffect } from "react";
import Header from "../Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AssignPop from "./createAssign";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import pic from "../../img/noRecord.jpeg";
const assignCategory = () => {
  return {
    emp_id: "",
    emp_name: "",
    department: "",
    category: "",
    model: "",
    issueDate: "",
    isDelete: "false",
  };
};
const editCategory1 = () => {
  return {
    emp_id: "",
    emp_name: "",
    department: "",
    category: "",
    model: "",
    issueDate: "",
  };
};
function Assign() {
  const [asset, setAsset] = useState(() => assignCategory());
  const [data, setData] = useState();
  const [editData, setEditData] = useState(() => editCategory1());
  const [depart, setDepart] = useState();
  const [employeeName, setNameEmployee] = useState();
  const [category, setCategory] = useState();
  const [empId, setEmpId] = useState();
  const [idd, setid] = useState();
  const [dd, setdd] = useState();
  const [serchData, setSearchData] = useState();
  const [show, setShow] = useState(true);
  const navigate = useNavigate();
  // alert("HEllo")
  async function addCategory() {
    if (asset && asset.emp_name && asset.department) {
      await axios
        .post("http://localhost:3001/createAssign", asset)
        .then((resp) => {
          setData(resp);
          navigate("/assign");
        })
        .catch((err) => {
          console.log("err", err);
        });
      await axios
        .get("http://localhost:3001/getAssign")
        .then((resp) => {
          setData(resp);
          navigate("/assign");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
    }
  }

  async function editFun(id) {
    if (
      editData &&
      editData.emp_name &&
      editData.department &&
      editData.category
    ) {
      await axios
        .put(`http://localhost:3001/editAssign/${id}`, editData)
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
      .put(`http://localhost:3001/deleteAssign/${id}`)
      .then((resp) => {
        console.log(resp);
        fetchInfo();
        navigate("/assign");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  function fetchInfo() {
    axios
      .get("http://localhost:3001/getAssign")
      .then((resp) => {
        setData(resp);
        console.log("jnsj", typeof serchData);
        let arr = [];
        if (resp.data.data && serchData) {
          arr = resp.data.data.filter((item) => {
            return item.emp_name.toLowerCase().includes(serchData.toLowerCase());
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
        navigate("/assign");
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
          if (!item.isDelete) {
            setdd(item.department);
          }
        });
        setDepart(resp);
        navigate("/assign");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function fetchEmployee() {
    axios
      .get("http://localhost:3001/getEmployee")
      .then((resp) => {
        setNameEmployee(resp);
        navigate("/assign");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function fetchCategory() {
    axios
      .get("http://localhost:3001/assetGetCategory")
      .then((resp) => {
        setCategory(resp);
        navigate("/assign");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    fetchInfo();
    fetchDepart();
    fetchEmployee();
    fetchCategory();
  }, []);
  useEffect(() => {
    fetchInfo();
  }, [serchData]);
  function onAdded(e) {
    if (e.target.name == "name") {
      const arr = e.target.value.split(",");
      setAsset({ ...asset, emp_name: arr[0], emp_id: arr[1] });
    }
    if (e.target.name == "department")
      setAsset({ ...asset, department: e.target.value });

    if (e.target.name == "date") {
      setAsset({ ...asset, issueDate: e.target.value });
    }
    if (e.target.name == "category")
      setAsset({ ...asset, category: e.target.value });

    if (e.target.name == "model") setAsset({ ...asset, model: e.target.value });
  }
  function onEdit(e) {
    if (e.target.name == "name") {
      const arr = e.target.value.split(",");
      setEditData({ ...editData, emp_name: arr[0], emp_id: arr[1] });
    }

    if (e.target.name == "department")
      setEditData({ ...editData, department: e.target.value });

    if (e.target.name == "date") {
      setEditData({ ...editData, issueDate: e.target.value });
    }
    if (e.target.name == "category")
      setEditData({ ...editData, category: e.target.value });

    if (e.target.name == "model")
      setEditData({ ...editData, model: e.target.value });
  }

  const getIdd = (id) => {
    setEmpId(id);
  };
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
                  <th>department</th>
                  <th>category</th>
                  <th>Model</th>
                  <th>Issue date</th>
                  <th>Action</th>
                </tr>
              </thead>
              {data && data.data.data !== undefined ? (
                <tbody key={1}>
                  {data.data.data.map((item, index) => (
                    <tr className="table-secondary" key={index}>
                      {item.isDelete == "false" ? (
                        <>
                          <td className="table-success">{item.emp_name}</td>
                          <td className="table-success">{item.department}</td>
                          <td className="table-success">{item.category}</td>
                          <td className="table-success">{item.model}</td>
                          <td className="table-success">{item.issueDate}</td>
                          <td>
                            <FontAwesomeIcon
                              icon={faTrash}
                              onClick={() => delet(item.a_id)}
                              type="button"
                              className="btn btn-primary"
                            />
                            <FontAwesomeIcon
                              style={{ marginLeft: "15px" }}
                              onClick={() => setid(item.a_id)}
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
          <AssignPop
            onAdded={onAdded}
            addCategory={addCategory}
            depart={depart}
            dd={dd}
            employeeName={employeeName}
            getIdd={getIdd}
            category={category}
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
                  Asset assign
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div>
                  <select
                    className="form-select mt-4"
                    defaultValue={"DEFAULT"}
                    onChange={onEdit}
                    name="name"
                  >
                    <option value="DEFAULT" disabled>
                      Employee name
                    </option>
                    {employeeName && employeeName.data.data
                      ? employeeName.data.data.map((item, index) => {
                          if (item.isDelete == "false") {
                            const arr = [];
                            arr.push(item.name);
                            arr.push(item.emp_id);
                            return (
                              <option key={index} value={arr}>
                                {item.name}
                              </option>
                            );
                          }
                        })
                      : null}
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
                <div className="input-group mb-3">
                  <select
                    className="form-select mt-4"
                    defaultValue={"DEFAULT"}
                    onChange={onEdit}
                    name="category"
                  >
                    <option value="DEFAULT" disabled>
                      Select asset category
                    </option>
                    {category && category.data.data
                      ? category.data.data.map((item, index) => {
                          if (item.isDelete == "false") {
                            return (
                              <option value={item.asset} key={index}>
                                {item.asset}
                              </option>
                            );
                          }
                        })
                      : null}
                  </select>
                </div>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    name="model"
                    className="form-control"
                    placeholder="Model name"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    onChange={onEdit}
                  />
                </div>
                <div className="input-group mb-3">
                  <input
                    type="date"
                    name="date"
                    className="form-control"
                    placeholder="Date"
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

export default Assign;
