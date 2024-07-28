import React from 'react';
import Tab from './Tab';
import 'bootstrap/dist/css/bootstrap.min.css';

function Tabs({ types, activeType, onTabClick }) {
    return (
        <div >
         <ul className="nav nav-tabs">
            {Object.keys(types).map(type => (
                <Tab
                    key={type}
                    type={type}
                    count={types[type].length}
                    isActive={type === activeType}
                    onClick={onTabClick}
                />
            ))}
         </ul>
        </div>
    );
}

export default Tabs;
