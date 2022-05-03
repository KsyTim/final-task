import React from 'react';
import { Link } from 'react-router-dom'; 

export const HeaderProfile = () => {
  return (
    <div className="header-user">
      <Link to="/user" className="header-user-item header-user-name">Малыш Грут</Link>
      <Link to="/user" className="header-user-item header-user-avatar">
        <div className="header-user-pic"></div>
      </Link>
      <ul className="header-dropdown header-dropdown__active">
        <li className="header-dropdown-item">
          <Link to="/user" className="header-dropdown-link">Посмотреть профиль</Link>
        </li>
        <li className="header-dropdown-item header-dropdown-logout">
          <Link to="/" className="header-dropdown-link">Выйти из системы</Link>
        </li>
      </ul>
    </div>
  )
}