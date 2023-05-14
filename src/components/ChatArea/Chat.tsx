import React, { useState } from 'react';
import { Configuration, OpenAIApi } from 'openai';
import ChatList from './ChatList';

interface ChatProps {
  children?: React.ReactElement;
}

const configuration = new Configuration({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const Chat = (props: ChatProps) => {
  const [response, setResponse] = useState<any>();
  const handleClick = async () => {
    const res = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: 'hows doing',
      temperature: 0.7,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });
    setResponse(res);
  };

  return (
    <div>
      <div>Chat Area</div>
      <button onClick={handleClick}>click me</button>
      {response && response.text}
      <ChatList />
    </div>
  );
};

export default Chat;
