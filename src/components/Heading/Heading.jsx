import React from "react";
import { useParams } from "react-router-dom";
import { ButtonsContainer } from "../Buttons/ButtonsContainer";
import { TaskStatus } from "../Tasks/TaskStatus/TaskStatus";

export const Heading = () => {
  const { event, id } = useParams();
  const displayHeading = () => {
    return event ?
            id ?
              event === 'about' ?
                <div>
                  Задача 1. Делаем дела
                  <TaskStatus />
                </div>
              : event === 'edit' ? 'Редактирование' : 'no page'  
            : 
              event === 'add' ? 'Создание' : 'no page'  
           : 
              !id ? 'Задачи' : 'no page'  
  }
  return (
    <section className="heading">
      <h2 className="heading-title">{displayHeading()}</h2>
      <ButtonsContainer />
    </section>
  )
}