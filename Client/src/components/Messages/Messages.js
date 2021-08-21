import React from 'react';
import CustomScrollBars from '../CustomScrollBar/CustomScrollBar'

import Message from './Message/Message';

import './Messages.css';

const Messages = ({ messages, name }) => {
  return (
  <CustomScrollBars className="messages">
    {messages.map((message, i) => <div key={i}><Message message={message} name={name}/></div>)}
  </CustomScrollBars>
  )
};

export default Messages;