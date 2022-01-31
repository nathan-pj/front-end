import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <>
    <React.StrictMode>
      <BrowserRouter>
        <Auth0Provider
        domain="dev-axskfeua.us.auth0.com"
        clientId="gStd7GP4anD51mjcDVs3oZqaA2tSdizB"
        redirectUri={"http://localhost:3000/"}
      >
        <App />
        </Auth0Provider>
      </BrowserRouter>
    </React.StrictMode>
  </>,
  document.getElementById("root")
);
