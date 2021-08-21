import React from 'react';

import './TextContainer.css';

const TextContainer = ({ users }) => (
  <div className="textContainer">
    <div>
      <h1>Realtime Chat Application </h1>
      <h2>Created with React, Express, Node and Socket.IO </h2>
    </div>
    {
      users
        ? (
          <div>
            <h1>People currently chatting:</h1>
            <div className="activeUserLists">
              <h2>
                {users.map(({name}) => (
                    <ul key={name} >
                      <li>{name}</li>
                    </ul>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;