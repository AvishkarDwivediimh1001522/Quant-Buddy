

"use client"
import React from 'react'
import { useState, useEffect } from 'react';

import { useCreateChatClient, Chat, Channel, ChannelHeader, MessageInput, MessageList, Thread, Window } from 'stream-chat-react';

import 'stream-chat-react/dist/css/v2/index.css';


const chatForum = ({ clerkUser, slug }) => {
  const apiKey = "hzyhksqcnpsp";
  const userId = 'user_2rmlE5VnGyqOe3B0Q0fSFbjQOmj';
  const userName = 'avishkar';
  const userToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoidXNlcl8ycm1sRTVWbkd5cU9lM0IwUTBmU0ZialFPbWoifQ.-sATCatyAbytWdBRglYorV8ww22br4d2_keYDMVuHyM';

  const user = {
    id: userId,
    name: userName,
    image: `https://getstream.io/random_png/?name=${userName}`,
  };

  const [channel, setChannel] = useState();
  const client = useCreateChatClient({
    apiKey,
    tokenOrProvider: userToken,
    userData: user,
  });

  useEffect(() => {
    if (!client) return;

    const channel = client.channel('messaging', slug, {
      image: 'https://getstream.io/random_png/?name=react',
      name: 'Discussion forum',
      members: [userId],
    });

    setChannel(channel);
    channel.addMembers([userId])
  }, [client]);

  if (!client) return <div>Setting up client & connection...</div>;

  return (
    <Chat client={client}>
      <Channel channel={channel}>
        <Window>
          <ChannelHeader />
          <MessageList />
          <MessageInput />
        </Window>
        <Thread />
      </Channel>
    </Chat>
  );
}

export default chatForum
