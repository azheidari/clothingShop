import React from "react";
import MainNavigation from "../components/navigation/MainNavigation";
import PageContent from "./product/PageContent";
import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();

  let title = "An error occured";
  let message = "Something went wrong";

  if (error.status === 500) {
    message = error.data.message;
  }

  if (error.status === 404) {
    title = "Not Found!";
    message = "Could not find resources or page.";
  }

  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        <p style={{ color: "black" }}>{message}</p>
      </PageContent>
    </>
  );
}

export default ErrorPage;
