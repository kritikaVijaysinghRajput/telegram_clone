import { useSelector } from "react-redux";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import SearchIcon from "@mui/icons-material/Search";
import CropSquareIcon from "@mui/icons-material/CropSquare";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChatBubble from "../components/ChatBubble";

const HomePage = () => {
  const chats = useSelector((state) => state.chat.selectedChats);
  const [showSidebar, setShowSidebar] = useState(true);
  const [activeChat, setActiveChat] = useState(null);

  const handleChatClick = (chat) => {
    setActiveChat(chat);
    setShowSidebar(false);
  };

  return (
    <div className="grid grid-cols-12 w-full h-full dark:bg-gray-800 dark:text-white">
      {showSidebar && (
        <div className="col-span-12 md:col-span-4 border border-r">
          <Sidebar />
        </div>
      )}
      <div
        className={`col-span-12 md:col-span-8 ${
          activeChat ? "absolute inset-0" : "relative"
        }`}
      >
        <header className="p-2 flex items-center justify-between border border-b">
          <div>
            <p className="font-bold">
              {activeChat ? activeChat.name : "Select a chat"}
            </p>
            {activeChat && (
              <p className="text-gray-400">
                {activeChat.subscribers} subscribers
              </p>
            )}
          </div>
          <div className="flex gap-2 items-center">
            <SearchIcon className="text-gray-400" />
            <CropSquareIcon className="text-gray-400" />
            <MoreVertIcon className="text-gray-400" />
          </div>
        </header>
        <div className="overflow-y-scroll h-screen w-full telegram-bg relative">
          {activeChat ? (
            <div className="p-4 bg-white">
              {activeChat.messages.map((message, index) => (
                <ChatBubble key={index} chat={activeChat} message={message} />
              ))}
            </div>
          ) : (
            chats?.map((chat, i) => (
              <div key={i} onClick={() => handleChatClick(chat)}>
                <ChatBubble chat={chat} />
              </div>
            ))
          )}
          <input
            className=" bottom-0 right-0 w-full bg-gray-200 text-black p-4 mb-12 rounded-full"
            type="text"
            placeholder="Write Message here"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
