import React from 'react';
import ChatList from './ChatList';

interface ChatProps {
  children?: React.ReactElement;
}

const Chat = (props: ChatProps) => {
  return (
    <div>
      <div>Chat Area</div>
      <ChatList />
    </div>
  );
};

export default Chat;
