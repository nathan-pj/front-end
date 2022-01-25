import { ConstProvider } from "../contexts/Context";
import { Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";

import "../css/imports.css";

import TopNav from "./nav/TopNav";
import Nav from "./nav/Nav";
import Spinner from "./Spinner";
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
  return (
    <ConstProvider>
      <TopNav />

      <div className="main_container">
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/" element={<SwipePage />} />
            <Route path="/liked-houses" element={<Favourites />} />
            <Route path="/user-profile" element={<UserProfile />} />
            <Route path="/house-profile" element={<HouseProfile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/add-property" element={<AddProperty />} />
            <Route path="/chat" element={<ChatPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>

      <Nav />
    </ConstProvider>
  );
}
