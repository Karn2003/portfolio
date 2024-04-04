import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import Home from "./component/Home.jsx";
import Mywork from "./component/Mywork.jsx";
import Contect from "./component/Contact.jsx";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/portfolio" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="mywork" element={<Mywork />} />
        <Route path="contact" element={<Contect />} />
      </Route>
    )
  );
  return (
    <>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </>
  );
}

export default App;
