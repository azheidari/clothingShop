import React, { useEffect } from "react";
import { Outlet, useLoaderData, useSubmit } from "react-router-dom";

import MainNavigation from "../components/navigation/MainNavigation";

function Root() {
  const token = useLoaderData("root");
  const submit = useSubmit();

  useEffect(() => {
    if (!token) {
      return;
    }
    setTimeout(() => {
      submit(null, { action: "/logOut", method: "post" });
    }, 1 * 60 * 60 * 1000);
  }, [token, submit]);

  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Root;
