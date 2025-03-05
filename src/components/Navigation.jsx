import React, { useState } from "react";
import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg w-100">
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
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li className="nav-item mx-4 pt-3">
              <Link className="nav-link active" aria-current="page" to="/">
                <h3>Home</h3>
              </Link>
            </li>
            <li className="nav-item mx-4 pt-3">
              <Link className="nav-link" to="/creatures">
                <h3>Creatures</h3>
              </Link>
            </li>
            <li className="nav-item mx-4 pt-3">
              <Link className="nav-link" to="/equipment">
                <h3>Equipment</h3>
              </Link>
            </li>
            <li className="nav-item mx-4 pt-3">
              <Link className="nav-link" to="/materials">
                <h3>Materials</h3>
              </Link>
            </li>
            <li className="nav-item mx-4 pt-3">
              <Link className="nav-link" to="/monsters">
                <h3>Monsters</h3>
              </Link>
            </li>
            <li className="nav-item mx-4 pt-3 ">
              <Link className="nav-link" to="/treasure">
                <h3>Treasure</h3>
              </Link>
            </li>
          </ul>
          <form className="d-flex px-2" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
        </div>
      </div>
    </nav>
  );
}
