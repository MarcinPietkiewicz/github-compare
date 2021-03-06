import React from "react";
import { ThemeConsumer } from "../contexts/theme";
import { Link, NavLink } from "react-router-dom";

const activeStyle = {
  color: "rgba(187,46,31",
};

export default function Nav() {
  return (
    <ThemeConsumer>
      {({ theme, toggleTheme }) => (
        <nav className="row space-between">
          <ul className="row nav">
            <li>
              <NavLink
                exact
                to="/"
                activeStyle={activeStyle}
                className="nav-link"
              >
                Popular
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/compare"
                activeStyle={activeStyle}
                className="nav-link"
              >
                Compare
              </NavLink>
            </li>
          </ul>

          <button
            style={{ fontSize: 30 }}
            className="btn-clear"
            onClick={toggleTheme}
          >
            {theme === "light" ? "🔦" : "💡"}
          </button>
        </nav>
      )}
    </ThemeConsumer>
  );
}
