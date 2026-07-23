import { useState } from "react";

import MainLayout from "../components/layout/MainLayout";
import Sidebar from "../components/sidebar/Sidebar";
import ChatBody from "../components/chat/ChatBody";
import ProfileDrawer from "../components/profile/ProfileDrawer";

import dummyChats from "../utils/dummyChats";

const Home = () => {
 const [selectedChat, setSelectedChat] = useState(null);

  const [showSidebar, setShowSidebar] =
    useState(true);

  const [showProfile, setShowProfile] =
    useState(false);

  return (
    <>
      <MainLayout>
        <Sidebar
          showSidebar={showSidebar}
          setShowSidebar={setShowSidebar}
          selectedChat={selectedChat}
          setSelectedChat={setSelectedChat}
          setShowProfile={setShowProfile}
        />

        <ChatBody
          selectedChat={selectedChat}
          setShowSidebar={setShowSidebar}
        />
      </MainLayout>

      <ProfileDrawer
        open={showProfile}
        onClose={() => setShowProfile(false)}
      />
    </>
  );
};

export default Home;