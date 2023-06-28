import React from "react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function AssignPop({ onAdded, addCategory, depart, employeeName, category,getIdd }) {  
  return (
    <>
      <div
        className="col-4"
        style={{
          direction: "rtl",
          marginLeft: "inherit",
          paddingRight: "5%",
          marginTop:'15px'
        }}
      >
        
        <FontAwesomeIcon
          icon={faPlus}
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        />
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
              <div>
                <select
                  className="form-select mt-4"
                  defaultValue={"DEFAULT"}
                  onChange={onAdded}
                  name="name"
                >
                  <option value="DEFAULT" disabled>
                    Employee name
                  </option>
                  {employeeName && employeeName.data.data
                    ? employeeName.data.data.map((item, index) => {
                      
                        if (item.isDelete == "false") {
                          const arr=[]
                          arr.push(item.name)
                          arr.push(item.emp_id)
                          return (
                            <option  key={index} value={arr}>
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
                  onChange={onAdded}
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
                  onChange={onAdded}
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
                  onChange={onAdded}
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
                data-bs-toggle="modal"
                onClick={() => addCategory()}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AssignPop;

