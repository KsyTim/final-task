import React from "react";
import { useParams } from "react-router-dom";
import { Button } from "./Button/Button";

export const ButtonsContainer = () => {
  const { event, id } = useParams();
  return (
    <div className="heading-buttons">      {
        event ?
          id ?
            event === 'about' ?
              <>
                <Button className='default' content='Взять в работу'/>
                <Button className='primary' content='Редактировать' />
                <Button className='error' content='Удалить' />
              </>
            : event === 'edit' ?
              <>
                <Button className='primary' content='Сохранить' />
                <Button className='default' content='Отмена'/>
              </> 
            : 'no page'  
          : 
            event === 'add' ? 
              <>
                <Button className='primary' content='Сохранить' />
                <Button className='default' content='Отмена'/>
              </>  
            : 'no page'  
        : 
          !id ?
            <Button className='primary' content='Добавить задачу' />
          : 'no page'  
      }
    </div>
  )
}