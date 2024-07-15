import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchChatList } from '../redux/chatSlice';
import ChatCard from './ChatCard';

const ChatList = () => {
  const dispatch = useDispatch();
  const chatList = useSelector((state) => state.chat.chatList);
  const chatStatus = useSelector((state) => state.chat.status);
  const error = useSelector((state) => state.chat.error);

  useEffect(() => {
    if (chatStatus === 'idle') {
      dispatch(fetchChatList());
    }
  }, [chatStatus, dispatch]);

  if (chatStatus === 'loading') {
    return <div>Loading...</div>;
  }

  if (chatStatus === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div className=' h-full overflow-y-scroll'>
      <ul>
        {chatList && chatList.map((chat) => (
          <ChatCard key={chat.id} chatData={chat}/>
        ))}
      </ul>
    </div>
  );
};

export default ChatList;
