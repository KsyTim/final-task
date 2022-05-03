import React from 'react';
import { Link } from 'react-router-dom'; 

export const HeaderNav = () => {
  return (
    <div className="header-links">
      <Link to="/tasks" className="header-links-item header-links-item__active">Задачи</Link>
      <Link to="/users" className="header-links-item">Пользователи</Link>
    </div>
  )
}