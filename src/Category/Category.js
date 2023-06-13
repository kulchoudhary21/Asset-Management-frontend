import React, { useEffect, useState } from "react";
import Header from "../Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const assetCategory = () => {
  return { assetCategory: "", isDelete: "false" };
};
function Category() {
  const [asset, setAsset] = useState(() => assetCategory());
  const [data, setData] = useState();
  const navigate = useNavigate();
  async function addCategory() {
    console.log(asset);
    if (asset) {
      await axios
        .post("http://localhost:3001/assetCreateCategory", asset)
        .then((resp) => {
          console.log(resp);
          setData(resp);
          navigate("/category");
        })
        .catch((err) => {
          console.log("err", err);
        });
      await axios
        .get("http://localhost:3001/assetGetCategory")
        .then((resp) => {
          console.log("---", resp);
          setData(resp);
          navigate("/category");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
  const delet = (id) => {
    axios
      .put(`http://localhost:3001/deleteCategory/${id}`)
      .then((resp) => {
        console.log(resp);
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
        navigate("/category");
      })
      .catch((err) => {
        console.log("Err", err);
      });
  }
  useEffect(() => {
    fetchInfo();
  }, []);
  if (data == undefined) {
    console.log(data, "---", true);
  }

  function onAdded(e) {
    console.log(e.target.value);
    setAsset({ ...asset, assetCategory: e.target.value });
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
                        <td>{item.asset}</td>
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
                            className="btn btn-secondary"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                            name="edit"
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

        <div
          className="col-6"
          style={{
            direction: "rtl",
            marginLeft: "inherit",
            paddingRight: "5%",
          }}
        >
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            create category
          </button>
        </div>
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
                    onChange={onAdded}
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
                  onClick={() => addCategory()}
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
