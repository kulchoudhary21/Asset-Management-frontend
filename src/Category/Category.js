import React, { useEffect, useState } from "react";
import Header from "../Header";
import axios from "axios";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import CategoryPop from "./createCategory";
import pic from "../../img/noRecord.jpeg";

const assetCategory = () => {
  return { assetCategory: "", isDelete: "false" };
};
const editCategory1 = () => {
  return { assetCategory: "" };
};
function Category() {
  const [asset, setAsset] = useState(() => assetCategory());
  const [data, setData] = useState();
  const [editData, setEditData] = useState(() => editCategory1());
  const [idd, setid] = useState();
  const [serchData, setSearchData] = useState();
  const [show, setShow] = useState(true);
  const navigate = useNavigate();

  async function addCategory() {
    if (asset && asset.assetCategory) {
      await axios
        .post("http://localhost:3001/assetCreateCategory", asset)
        .then((resp) => {
          setData(resp);
          navigate("/category");
        })
        .catch((err) => {
          console.log("err", err);
        });
      await axios
        .get("http://localhost:3001/assetGetCategory")
        .then((resp) => {
          setData(resp);
          navigate("/category");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  async function editFun(id) {
    if (editData && editData.assetCategory) {
      await axios
        .put(`http://localhost:3001/editCategory/${id}`, editData)
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
      .put(`http://localhost:3001/deleteCategory/${id}`)
      .then((resp) => {
        fetchInfo();
        navigate("/category");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  function fetchInfo() {
    axios
      .get("http://localhost:3001/assetGetCategory")
      .then((resp) => {
        setData(resp);
        console.log("jnsj", typeof serchData);
        let arr = [];
        if (resp.data.data && serchData) {
          arr = resp.data.data.filter((item) => {
            return item.asset.toLowerCase().includes(serchData.toLowerCase());
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
        navigate("/category");
      })
      .catch((err) => {
        console.log("Err", err);
      });
  }
  useEffect(() => {
    fetchInfo();
  }, [serchData]);

  function onAdded(e) {
    setAsset({ ...asset, assetCategory: e.target.value });
  }
  function onEdit(e) {
    setEditData({ ...editData, assetCategory: e.target.value });
  }
  function func(e) {
    setSearchData(e.target.value);
  }
  return (
    <div>
      <Header func={func} />
      {show ? (
        <div className="row">
          <div className="col-6">
            <h5>Categories</h5>
            <table className="table" key={1}>
              <thead key={2}>
                <tr key={3}>
                  <th scope="col">Asset</th>
                  <th>Action</th>
                </tr>
              </thead>
              {data && data.data.data !== undefined ? (
                <tbody key={4}>
                  {data.data.data.map((item, index) => (
                    <tr key={index}>
                      {item.isDelete == "false" ? (
                        <>
                          <td>{item.asset}</td>
                          <td>
                            <FontAwesomeIcon
                              icon={faTrash}
                              onClick={() => delet(item.id)}
                              type="button"
                              className="btn btn-primary"
                              data-bs-target="#exampleModal"
                            />
                            <FontAwesomeIcon
                              onClick={() => setid(item.id)}
                              style={{ marginLeft: "15px" }}
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
          <CategoryPop onAdded={onAdded} addCategory={addCategory} />
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

export default Category;
