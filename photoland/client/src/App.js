import React from "react";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

//page
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Search from "./pages/Search";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";

//Layout
const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/products/:id", element: <Products /> },
      { path: "/product/:id", element: <ProductDetails /> },
      { path: "/search", element: <Search /> },
    ],
  },
]);

// Router can be made in main.jsx or app.jsx
// first create a provider which will take props of router
// <RouterProvider router={router}/>
// we can import oulet which helps to keep few items in webpages  same and only change the few parts like header and footer same in every page same and change othe parts of the website like children
// path: '/'
// element:
// <Layout/>,
// children:
// [
// {
// path:
// element:
// <Home />
// path: "about"

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;

// My Token
// 4afb747a1dc8cae5829b6a9b63437841813ac5c2a2a1b0723a8cdbb6549206ead9d31c8c02067bd181312283da110d163fb48773a5fef6a68510aac246179021712fb40718d6814bb2ec5762a983ddfcb171fab6010a2adf18f35d8e537a0f5d72d0bf370656035a4f52a900c47dd40ff39e481b93815aba5aa8bd4a2b20286a
