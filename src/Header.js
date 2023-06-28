import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
function Header({func}) {
  const [path, setPath] = useState();
  const location = useLocation();
  useEffect(() => {
    const p = location.pathname;
    setPath(p);
  }, [path]);

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg"
        style={{ backgroundColor: "#262626", color: "aliceblue" }}
      >
        <div className="container-fluid">
          <Link
            className="navbar-brand"
            to="/home"
            style={{ color: "darkgrey" }}
          >
            Asset
          </Link>
          <button className="navbar-toggler" type="button">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  style={{ color: "aliceblue" }}
                  className="nav-link active"
                  aria-current="page"
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  style={{ color: "aliceblue" }}
                  className="nav-link active"
                  aria-current="page"
                  to="/category"
                >
                  category
                </Link>
              </li>
              <li className="nav-item">
                {path != "/home" && path != "/about" ? (
                  <div style={{ position: "absolute", right: "8%" }}>
                    <input
                      className="form-control me-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                     onChange={func}
                    />
                  </div>
                ) : null}

                <Link
                  style={{ color: "aliceblue" }}
                  className="nav-link active"
                  aria-current="page"
                  to="/assign"
                >
                  Assign
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  style={{ color: "aliceblue" }}
                  className="nav-link active"
                  aria-current="page"
                  to="/employees"
                >
                  Employess
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  style={{ color: "aliceblue" }}
                  className="nav-link active"
                  aria-current="page"
                  to="/department"
                >
                  Department
                </Link>
              </li>
              <div>
                <li
                  className="nav-item"
                  style={{ position: "absolute", right: "10px" }}
                >
                  <Link
                    style={{ color: "aliceblue" }}
                    className="nav-link active"
                    aria-current="page"
                    to="/logout"
                  >
                    Logout
                  </Link>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
