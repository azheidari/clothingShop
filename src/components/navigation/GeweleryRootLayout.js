import React from "react";
import { Outlet } from "react-router-dom";
import GeweleryNavigation from "../../pages/product/GeweleryRootLayout";

const GeweleryRootLayout = () => {
  return (
    <div>
      <GeweleryNavigation />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default GeweleryRootLayout;
