import React from "react";
function EmployeePop({ onAdded, addCategory, depart }) {
  console.log(depart);
  if (depart && depart.data.data) {
    depart.data.data.map((item) => {
      console.log(item.department);
    });
  }
  // depart.data.data.map((item)=>{
  //   console.log(item)
  // })
  return (
    <>
      <div
        className="col-2"
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
                  placeholder="Employee name"
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
                  name="department"
                >
                  <option value="DEFAULT" disabled>
                    Select Department
                  </option>
                  {depart && depart.data.data
                    ? depart.data.data.map((item, index) => {
                        return (
                          <option value={item.department} key={index}>
                            {item.department}
                          </option>
                        );
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

export default EmployeePop;
