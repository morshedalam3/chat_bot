import React from 'react';
import { Link } from "react-router-dom";

import './InfoBar.css';

const InfoBar = ({ room }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <p>Active</p>
      <h3>{room}</h3>
    </div>
    <div className="rightInnerContainer">
    <Link  to={`/`}>
          <button type="submit">close</button>
        </Link>
    </div>
  </div>
);

export default InfoBar;