import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Terminos from "./pages/Terminos";
import Privacidad from "./pages/Privacidad";
import LibroReclamaciones from "./pages/LibroReclamaciones";

const ROUTES = {
  "/terminos": Terminos,
  "/privacidad": Privacidad,
  "/libro-de-reclamaciones": LibroReclamaciones,
};

const Page = ROUTES[window.location.pathname.replace(/\/+$/, "")] || App;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Page />);
