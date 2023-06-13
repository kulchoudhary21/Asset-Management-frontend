import React, { useEffect, useState } from "react";
import Header from "../Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import DepartmentPop from "./createDepartment";
const assetCategory = () => {
  return { assetCategory: "", isDelete: "false" };
};
const editCategory1 = () => {
  return { assetCategory: "" };
};
function Department() {
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
          navigate("/department");
        })
        .catch((err) => {
          console.log("err", err);
        });
      await axios
        .get("http://localhost:3001/getDepartment")
        .then((resp) => {
          setData(resp);
          navigate("/department");
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
        navigate("/department");
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
        navigate("/department");
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
  return (
    <div>
      <Header />
      <div className="row">
        <div className="col-6">
          <h5>Categories</h5>
          <table className="table" key={1}>
            <thead key={2}>
              <tr key={3}>
                <th scope="col">Asset</th>
                <th>Delete</th>
                <th>Edit</th>
              </tr>
            </thead>
            {data && data.data.data !== undefined ? (
              <tbody key={4}>
                {data.data.data.map((item, index) => (
                  <tr key={index}>
                    {item.isDelete == "false" ? (
                      <>
                        <td>{item.department}</td>
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
        <DepartmentPop onAdded={onAdded} addCategory={addCategory} />
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
                  Asset
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

export default Department
