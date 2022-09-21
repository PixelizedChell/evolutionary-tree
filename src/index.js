import ReactDOM from "react-dom/client";
import * as React from "react";
import App from "./Components/App.js";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
const router = createBrowserRouter([{
  path: "/",
  element: <App />
}])
const app = document.getElementById("app");
const root = ReactDOM.createRoot(app)
root.render(<RouterProvider router={router}/>)
