import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Category from "./pages/category/Category";
import Root from "./pages/Root";
import ErrorPage from "./pages/ErrorPage";
import ProductDetails from "./pages/product/ProductDetails";
import Home from "./pages/product/Home";
import { logOut } from "./pages/auth/logout";
import Authentication from "./pages/auth/Authentication";
import SignUp from "./pages/auth/SignUp";
import Electronics from "./pages/product/Electronics";
import Gewelery, { productLoader } from "./pages/product/Gewelery";
import Menclothing from "./pages/product/Menclothing";
import Womenclothing from "./pages/product/Womenclothing";
import ElectronicsRootLayout from "./pages/product/ElectronicsRootLayout";
import Edit from "./pages/product/Edit";
import GeweleryRootLayout from "./pages/product/ElectronicsRootLayout";
import NewProduct from "./pages/product/NewProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: "true", element: <Home /> },
      {
        path: "electronics",
        element: <ElectronicsRootLayout />,
        children: [
          { index: true, element: <Electronics /> },
          {
            path: ":id",
            children: [
              { index: true, element: <ProductDetails /> },
              { path: "edit", element: <Edit /> },
            ],
          },
        ],
      },
      { path: ":category", element: <Category /> },
      {
        path: "jewelery",
        element: <GeweleryRootLayout />,
        children: [
          { index: true, element: <Gewelery /> },
          {
            path: ":id",
            children: [
              { index: true, element: <ProductDetails /> },
              { path: "edit", element: <Edit /> },
            ],
          },
          { path: "new", element: <NewProduct /> },
        ],
      },
      { path: "menclothing", element: <Menclothing /> },
      { path: "womenclothing", element: <Womenclothing /> },
      { path: "jewelery/:id", element: <ProductDetails /> },
      { path: "menclothing/:id", element: <ProductDetails /> },
      { path: "womenclothing/:id", element: <ProductDetails /> },
      { path: ":id", element: <ProductDetails /> },
      {
        path: "auth",
        element: <Authentication />,
      },
      {
        path: "logOut",
        action: logOut,
      },
      {
        path: "signUp",
        element: <SignUp />,
      },
    ],
  },
]);

function App() {
  // return <Category />;
  return <RouterProvider router={router} />;
}

export default App;
