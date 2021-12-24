import React from 'react';
import { ReactComponent as CheckSVG } from './check.svg';
import { ReactComponent as DeleteSVG } from './delete.svg';
import { ReactComponent as MarketSVG } from './market.svg';
import './TodoIcon.css';

const iconTypes = {
  "check": color => (
    <CheckSVG className="Icon-svg Icon-svg--check" fill={color} />
  ),
  "delete": color => (
    <DeleteSVG className="Icon-svg Icon-svg--delete" fill={color} />
  ),
  "list": color => (
    <MarketSVG className="Icon-svg--list" fill={color} />
  ),

};

function TodoIcon({ type, color = 'gray', onClick }) {
  return (
    <span
      className={`Icon-container Icon-container--${type}`}
      onClick={onClick}
    >
      {iconTypes[type](color)}
    </span>
  );
}

function TodoTitle({ type, color,text,style }) {
  return (
    <React.Fragment>
    <span
      className={`Icon-container Icon-container--${type} icono--${style === 'completed' ? 'styleOne' : 'styleTwo'} `} 
    >
     
        
      {iconTypes[type](color)}
    </span>
    <label className="Icon">{text}</label>
    </React.Fragment>
  );
}

export { TodoIcon, TodoTitle };
