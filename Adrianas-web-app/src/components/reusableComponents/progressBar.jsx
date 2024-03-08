import React from 'react';
import '../../styles/progressbar.css'

function StatusBar({ currentPage }) {
  const bar1Class = currentPage === 1 ? 'active-bar' : '';
  const bar2Class = currentPage >= 2 ? 'active-bar' : '';

  return (
    <div className='status-bar-container'>
      <div className={`status-bar ${bar1Class}`}></div>
      <div className={`status-bar ${bar2Class}`}></div>
    </div>
  );
}

export default StatusBar;
