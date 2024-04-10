import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AlbumSection from "./components/AlbumSection.jsx";
import AlbumDetailSection from "./components/AlbumDetailSection.jsx";
import { ModalProvider } from "./contexts/ModalContext.jsx";
import { AlbumProvider } from "./contexts/AlbumContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <AlbumSection />,
      },
      {
        path: "album/:id",
        element: <AlbumDetailSection />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AlbumProvider>
      <ModalProvider>
        <RouterProvider router={router} />
      </ModalProvider>
    </AlbumProvider>
  </React.StrictMode>
);
