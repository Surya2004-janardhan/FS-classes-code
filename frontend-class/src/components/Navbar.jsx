import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <h4>Notes Navbar</h4>

      <ul>
        <li>
          <Link to="/">Notes</Link>
        </li>
        <li>
          <Link to="/add-note">Add note</Link>
        </li>
      </ul>
    </div>
  );
}
