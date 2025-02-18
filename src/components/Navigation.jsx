import React from "react";

export function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item mx-4 pt-3">
                <a className="nav-link active" aria-current="page" href="#">
                  <h3>Home</h3>
                </a>
              </li>
              <li className="nav-item mx-4 pt-3">
                <a className="nav-link" href="#">
                  <h3>Creatures</h3>
                </a>
              </li>
              <li className="nav-item mx-4 pt-3">
                <a className="nav-link" href="#">
                  <h3>Equipment</h3>
                </a>
              </li>
              <li className="nav-item mx-4 pt-3">
                <a className="nav-link" href="#">
                  <h3>Materials</h3>
                </a>
              </li>
              <li className="nav-item mx-4 pt-3">
                <a className="nav-link" href="#">
                  <h3>Monsters</h3>
                </a>
              </li>
              <li className="nav-item mx-4 pt-3">
                <a className="nav-link" href="#">
                  <h3>Treasure</h3>
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-light" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
}
