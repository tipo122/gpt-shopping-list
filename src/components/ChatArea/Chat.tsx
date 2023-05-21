import React, { useState } from 'react';
import { Configuration, OpenAIApi } from 'openai';
import { Input } from 'antd';
import ChatList from './ChatList';

interface ChatProps {
  children?: React.ReactElement;
}

const configuration = new Configuration({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const { TextArea } = Input;

const Chat = (props: ChatProps) => {
  const [prompt, setPrompt] = useState<string>('');
  const [response, setResponse] = useState<any>();
  const handleClick = async () => {
    const res = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: prompt,
      temperature: 0.7,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });
    setResponse(res.data.choices[0].text);
  };

  return (
    <div>
      <div>Chat Area</div>
      <hr />
      <ChatList />
      {response && response}
      <hr />
      <TextArea
        value={prompt}
        onChange={(e) => {
          setPrompt(e.target.value);
        }}
      ></TextArea>
      <button onClick={handleClick}>Submit</button>
    </div>
  );
};

export default Chat;
