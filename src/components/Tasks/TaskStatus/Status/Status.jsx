import React from "react";

export const Status = ({status}) => {
  const statusContent = (status) => {
    return status === 'open' ? 'Открыто'
            : status === 'get' ? 'В работе'
            : status === 'test' ? 'Тестирование' 
            : status === 'done' ? 'Сделано' : false;
  }
  return (
    <>
      {statusContent(status) ? <button className={`status-${status}`}>{statusContent(status)}</button> : ''}
    </>
  )
}