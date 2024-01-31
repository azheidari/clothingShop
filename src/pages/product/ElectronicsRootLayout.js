import React from "react";
import { Outlet } from "react-router-dom";
import ElectronicsMainNavigation from "../../components/navigation/ElectronicsMainNavigation";

const GeweleryRootLayout = () => {
  return (
    <div>
      <ElectronicsMainNavigation />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default GeweleryRootLayout;
