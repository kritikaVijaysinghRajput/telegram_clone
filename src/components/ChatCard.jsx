/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { fetchChatDetails, selectChat } from "../redux/chatSlice";
import { formatDate, getInitials, getRandomGradient } from "../utils";

const ChatCard = ({ chatData }) => {
  const dispatch = useDispatch();
  const nameOrEmail = chatData.creator.name || chatData.creator.email;
  const initials = getInitials(nameOrEmail);
  const gradient = getRandomGradient();
  const formattedDate = formatDate(chatData.updated_at);

  const handleChatSelect = () => {
    dispatch(selectChat(chatData.id));
    dispatch(fetchChatDetails(chatData.id));
  };

  return (
    <div
      className="relative hover:bg-gray-100 px-4 flex items-center gap-2 p-2 w-full cursor-pointer"
      onClick={handleChatSelect}
    >
      <div
        className="p-4 rounded-full flex items-center justify-center"
        style={{ background: gradient, width: 40, height: 40, color: "#fff" }}
      >
        <p>{initials}</p>
      </div>
      <div className="info">
        <p className="font-bold text-sm">{nameOrEmail}</p>
        <p className="text-xs">Last seen: 3 hours ago</p>
      </div>
      <div className="absolute right-2 top-0">
        <p className="text-xs">{formattedDate}</p>
        <div className="absolute right-0 top-6 bg-gray-400 text-white text-center flex justify-center items-center p-2 rounded-full w-6 h-5 text-xs font-semibold">
          <p>{chatData.msg_count}</p>
        </div>
      </div>
    </div>
  );
};

export default ChatCard;
