import React from "react";
import { Link } from "react-router-dom";
import classes from "../../pages/product/home.module.css";

const ElectronicsMainNavigation = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link
              to="electronics"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            />
            electronics
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ElectronicsMainNavigation;
