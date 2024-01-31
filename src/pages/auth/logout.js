import { redirect } from "react-router-dom";

export function logOut() {
  localStorage.removeItem("token");
  return redirect("/auth");
}
