/* eslint-disable react/prop-types */

const ChatBubble = ({ chat }) => {
  const userID = 1;
  return (
    <div
      className={`${
        userID === chat.sender_id
          ? " flex items-center justify-end"
          : "justify-start"
      }`}
    >
      <div
        className={`w-[20rem] p-2 m-2 rounded-3xl shadow-sm border ${
          userID === chat.sender_id ? "bg-sky-500 right-2" : "bg-white"
        }`}
      >
        <p>{chat.message}</p>
      </div>
    </div>
  );
};

export default ChatBubble;
