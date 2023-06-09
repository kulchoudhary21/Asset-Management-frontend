import React, { useEffect, useState } from "react";
import Header from "../Header";
import CategoryPop from "./createCategory";

function Category() {
  const [isOpen, setIsOpen] = useState(true);
  function Open() {
    setIsOpen(true);
    console.log("hello");
  }
  function Close() {
    setIsOpen(false);
  }
  return (
    <div>
      <Header />
      <div className="row">
        <div className="col-6">
          <h4>Categories</h4>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">assets id</th>
                <th scope="col">Asset Name</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
              </tr>
            </tbody>
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
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">
                  Asset
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <div class="input-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Asset name"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-primary">
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
