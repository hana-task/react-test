import React from 'react';

function Tab({ type, count, isActive, onClick }) {
  return (
      <li className="nav-item" key={type}>
        <a className={`nav-link ${isActive ? 'active' : ''}`} href={`#${type}`} onClick={() => onClick(type)}>
         {type} ({count})
       </a>
      </li>
  );
}

export default Tab;
