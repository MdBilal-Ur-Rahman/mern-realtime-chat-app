import { useState } from "react";

import MainLayout from "../components/layout/MainLayout";
import Sidebar from "../components/sidebar/Sidebar";
import ChatBody from "../components/chat/ChatBody";

import dummyChats from "../utils/dummyChats";

const Home = () => {
  const [selectedChat, setSelectedChat] = useState(
    dummyChats[0]
  );

  const [showSidebar, setShowSidebar] =
    useState(true);

  return (
    <MainLayout>
      <Sidebar
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
        selectedChat={selectedChat}
        setSelectedChat={setSelectedChat}
      />

      <ChatBody
        selectedChat={selectedChat}
        setShowSidebar={setShowSidebar}
      />
    </MainLayout>
  );
};

export default Home;