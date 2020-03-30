import React from "react";
import Resume from "../assets/resume.pdf";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="NavBarDiv container">
      <div className="row">
        <div className="col-sm"></div>
        <div className="col-sm-10 text-center">
          {/* home button */}
          <NavLink to="/">
            <button type="button" class="btn btn-outline-primary m-2">
              Home
            </button>
          </NavLink>

          {/* resume button */}
          <a href={Resume}>
            <button type="button" class="btn btn-outline-primary m-2">
              Resume
            </button>
          </a>

          {/* github button */}
          <button
            type="button"
            class="btn btn-outline-primary m-2"
            onClick={() => window.open("https://github.com/guittap")}
          >
            Github
          </button>

          {/* blog button */}
          <NavLink to="/blog">
            <button type="button" class="btn btn-outline-primary m-2">
              Blog
            </button>
          </NavLink>

          {/* instagram button */}
          <button
            type="button"
            class="btn btn-outline-primary m-2"
            onClick={() => window.open("https://www.instagram.com/warge.n/")}
          >
            Instagram
          </button>
        </div>
        <div className="col-sm"></div>
      </div>
    </div>
  );
};

export default NavBar;
