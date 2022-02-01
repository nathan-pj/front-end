import { ConstProvider } from "../contexts/Context";
import { Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";
import { useAuth0 } from "@auth0/auth0-react";

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
const ChatPage = React.lazy(() => import("../components/pages/chat/ChatPage"));
const SwipePage = React.lazy(() => import("./pages/swipePage/SwipePage"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

export default function App() {

  const { isAuthenticated } = useAuth0();

  return (
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

            {isAuthenticated && <Routes>
              <Route path="/" element={<SwipePage />} />
              <Route path="/liked-houses" element={<Favourites />} />
              <Route path="/user-profile/:user_id" element={<UserProfile />} />
              <Route
                path="/house-profile/:house_id"
                element={<HouseProfile />}
              />
              <Route path="/settings" element={<Settings />} />
              <Route path="/add-property" element={<AddProperty />} />
              <Route path="/chat/:room_id" element={<ChatPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>}

            {!isAuthenticated && <p>You Must Be Logged in to Access This App.</p>
            
            }
            
          </Suspense>
        </div>

        <Nav />
      </ConstProvider>
  );
}
