import React from "react";
import { Link } from "react-router-dom";
import classes from "../../pages/product/home.module.css";

const GeweleryNavigation = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link
              to="Gewelery"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            />
            Gewelery
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default GeweleryNavigation;
