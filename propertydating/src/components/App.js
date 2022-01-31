import { ConstProvider } from "../contexts/Context";
import { Routes, Route } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import React, { Suspense } from "react";

import "../css/imports.css";

import TopNav from "./nav/TopNav";
import Nav from "./nav/Nav";


const Favourites = React.lazy(() =>
  import("./pages/likedHouses/Favourites.js")
);
const UserProfile = React.lazy(() =>
  import("../components/pages/userProfile/UserProfile")
);
const HouseProfile = React.lazy(() =>
  import("../components/pages/houseProfile/HouseProfile")
);
const Settings = React.lazy(() =>
  import("../components/pages/settings/Settings")
);
const AddProperty = React.lazy(() =>
  import("../components/pages/addProperty/AddProperty")
);
/* const ChatPage = React.lazy(() => import("../components/pages/chat/ChatPage")); */
const SwipePage = React.lazy(() => import("./pages/swipePage/SwipePage"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

export default function App() {
  return (
    <Auth0Provider
      domain="dev-axskfeua.us.auth0.com"
      clientId="gStd7GP4anD51mjcDVs3oZqaA2tSdizB"
      redirectUri={"http://localhost:3000/"}
    >
      <ConstProvider>
        <TopNav />
        <div className="main_container">
          <Suspense
            fallback={
              <div className="spinner-container">
                <i className="fas fa-circle-notch fa-spin fa-5x"></i>
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<SwipePage />} />
              <Route path="/liked-houses" element={<Favourites />} />
              <Route path="/user-profile" element={<UserProfile />} />
              <Route
                path="/house-profile/:house_id"
                element={<HouseProfile />}
              />
              <Route path="/settings" element={<Settings />} />
              <Route path="/add-property" element={<AddProperty />} />
           {/*    <Route path="/chat/:room_id" element={<ChatPage />} /> */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </div>

        <Nav />
      </ConstProvider>
    </Auth0Provider>
  );
}
