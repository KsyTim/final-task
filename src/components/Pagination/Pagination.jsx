import React from "react";
import { Button } from "../Buttons/Button/Button";

export const Pagination = () => {
  return (
    <div className="task-list-item task-pagination">
      <div className="task-pagination-nav">
        <Button className="disabled task-pagination-nav__item" content="Назад" disabled={true} />
        <Button className="primary task-pagination-nav__item" content="1" data="1" />
        <Button className="default task-pagination-nav__item" content="2" data="2" />
        <Button className="default task-pagination-nav__item" content="3" data="3" />
        <Button className="default task-pagination-nav__item" content="Вперед" />
      </div>
      <div className="task-pagination-info">Показано 1 - 10 из 28</div>
    </div>
  )
}