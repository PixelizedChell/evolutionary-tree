import ReactDOM from "react-dom/client";
import * as React from "react";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import App from "./Components/App.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/trees/:treeName",
    element: <App />
  }
])
const root = ReactDOM.createRoot(document.getElementById("app"))
root.render(<App />)