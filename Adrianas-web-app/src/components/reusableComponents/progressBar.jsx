import React from 'react';
import '../../styles/progressbar.css'

function StatusBar({ currentPage }) {
  const bar1Class = currentPage >= 1 ? 'active-bar' : ''; // Aplica la clase 'active-bar' a la primera barra si currentPage es 1 o más
  const bar2Class = currentPage >= 2 ? 'active-bar' : ''; // Aplica la clase 'active-bar' a la segunda barra si currentPage es 2 o más

  return (
    <div className='status-bar-container'>
      <div className={`status-bar ${bar1Class}`}></div>
      <div className={`status-bar ${bar2Class}`}></div>
    </div>
  );
}

export default StatusBar;
