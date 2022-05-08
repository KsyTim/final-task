import React
  // , { useEffect } 
  from "react";
// import Api from '../../../api';
import { observer } from 'mobx-react-lite'
import { Button } from "../../Buttons/Button/Button";

export const TaskFilter = observer(() => {

  // useEffect(()=> {
  //   Api.requestData();
  // }, []);

  // const data = Api.data;
  // console.log(data);

  const showCheckboxes = (event) => {
    console.log();
    if(event.target.closest('div.task-filter-container').querySelector('.task-filter-container_item__hidden').classList.length <= 1) {
      event.target.classList.add('open');
      event.target.closest('div.task-filter-container').querySelector('.task-filter-container_item__hidden').classList.add('dropdown__active');
      event.target.classList.add('active')
      event.target.closest('div.task-filter-container').querySelector('.task-filter-arrow') && event.target.closest('div.task-filter-container').querySelector('.task-filter-arrow').classList.add('open');
    } else {
      event.target.classList.remove('open');
      event.target.closest('div.task-filter-container').querySelector('.task-filter-container_item__hidden').classList.remove('dropdown__active');
      event.target.classList.remove('active');
      event.target.closest('div.task-filter-container').querySelector('.task-filter-arrow') && event.target.closest('div.task-filter-container').querySelector('.task-filter-arrow').classList.remove('open');
      // event.target.closest('div.task-filter-container_item__visible').querySelector('select option').textContent = 'Выбрано';
    }
  }

  return (
    <form className="task-list-item task-filter">
      <div className="task-filter-item task-filter-container task-filter-type">
        <div 
          className="task-filter-container_item__visible" 
          onClick={showCheckboxes}
        >Тип
        </div>
        <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" className="task-filter-arrow">
          <path d="M3.07861 6L0 0H1.82084L3.48812 3.52304C3.59537 3.74706 3.69287 3.98916 3.78062 4.24932C3.86837 4.50948 3.92931 4.72809 3.96344 4.90515H4.02194C4.05606 4.72087 4.12188 4.50045 4.21938 4.2439C4.31688 3.98374 4.41682 3.74345 4.5192 3.52304L6.18647 0H8L4.92139 6H3.07861Z" fill="#B5B5B5"/>
        </svg>
        <div className="task-filter-container_item__hidden">
          <label htmlFor="filter-task">
            <input type="checkbox" id="filter-task" />
             <span className="filter-task-checkbox">Задача</span>
          </label>
          <label htmlFor="filter-mistake">
            <input type="checkbox" id="filter-mistake" />
            <span className="filter-task-checkbox">Ошибка</span>
          </label>
        </div>
      </div>

      <div className="task-filter-item task-filter-container task-filter-name">
        <div 
          className="task-filter-container_item__visible" 
          onClick={showCheckboxes}
        >Название задачи
        </div>
        <div className="task-filter-container_item__hidden">
          <label htmlFor="filter-name-01">
            <input type="checkbox" id="filter-name-01" />
            <span className="filter-task-checkbox">Задача 1</span>
          </label>
          <label htmlFor="filter-name-02">
            <input type="checkbox" id="filter-name-02" />
            <span className="filter-task-checkbox">Задача 2</span>
          </label>
          <label htmlFor="filter-name-03">
            <input type="checkbox" id="filter-name-03" />
            <span className="filter-task-checkbox">Задача 3</span>
          </label>
          <label htmlFor="filter-name-04">
            <input type="checkbox" id="filter-name-04" />
            <span className="filter-task-checkbox">Задача 4</span>
          </label>
        </div>
      </div>

      <div className="task-filter-item task-filter-container task-filter-user">
        <div 
          className="task-filter-container_item__visible" 
          onClick={showCheckboxes}
        >Пользователь
        </div>
        <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" className="task-filter-arrow">
          <path d="M3.07861 6L0 0H1.82084L3.48812 3.52304C3.59537 3.74706 3.69287 3.98916 3.78062 4.24932C3.86837 4.50948 3.92931 4.72809 3.96344 4.90515H4.02194C4.05606 4.72087 4.12188 4.50045 4.21938 4.2439C4.31688 3.98374 4.41682 3.74345 4.5192 3.52304L6.18647 0H8L4.92139 6H3.07861Z" fill="#B5B5B5"/>
        </svg>
        <div className="task-filter-container_item__hidden">
          <label htmlFor="filter-user-01">
            <input type="checkbox" id="filter-user-01" />
            <span className="filter-task-checkbox">Пользователь 1</span>
          </label>
          <label htmlFor="filter-user-02">
            <input type="checkbox" id="filter-user-02" />
            <span className="filter-task-checkbox">Пользователь 2</span>
          </label>
          <label htmlFor="filter-user-03">
            <input type="checkbox" id="filter-user-03" />
            <span className="filter-task-checkbox">Пользователь 3</span>
          </label>
          <label htmlFor="filter-user-04">
            <input type="checkbox" id="filter-user-04" />
            <span className="filter-task-checkbox">Пользователь 4</span>
          </label>
        </div>
      </div>

      <div className="task-filter-item task-filter-container task-filter-status">
        <div 
          className="task-filter-container_item__visible" 
          onClick={showCheckboxes}
        >Статус
        </div>
        <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" className="task-filter-arrow">
          <path d="M3.07861 6L0 0H1.82084L3.48812 3.52304C3.59537 3.74706 3.69287 3.98916 3.78062 4.24932C3.86837 4.50948 3.92931 4.72809 3.96344 4.90515H4.02194C4.05606 4.72087 4.12188 4.50045 4.21938 4.2439C4.31688 3.98374 4.41682 3.74345 4.5192 3.52304L6.18647 0H8L4.92139 6H3.07861Z" fill="#B5B5B5"/>
        </svg>
        <div className="task-filter-container_item__hidden">
          <label htmlFor="filter-status-open">
            <input type="checkbox" id="filter-status-open" />
            <span className="filter-task-checkbox">Открыто</span></label>
          <label htmlFor="filter-status-get">
            <input type="checkbox" id="filter-status-get" />
            <span className="filter-task-checkbox">В работе</span></label>
          <label htmlFor="filter-status-test">
            <input type="checkbox" id="filter-status-test" />
            <span className="filter-task-checkbox">Тестируется</span></label>
          <label htmlFor="filter-status-done">
            <input type="checkbox" id="filter-status-done" />
            <span className="filter-task-checkbox">Сделано</span></label>
        </div>
      </div>

      <div className="task-filter-item task-filter-container task-filter-rank">
        <div 
          className="task-filter-container_item__visible" 
          onClick={showCheckboxes}
        >Приоритет
        </div>
        <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" className="task-filter-arrow">
          <path d="M3.07861 6L0 0H1.82084L3.48812 3.52304C3.59537 3.74706 3.69287 3.98916 3.78062 4.24932C3.86837 4.50948 3.92931 4.72809 3.96344 4.90515H4.02194C4.05606 4.72087 4.12188 4.50045 4.21938 4.2439C4.31688 3.98374 4.41682 3.74345 4.5192 3.52304L6.18647 0H8L4.92139 6H3.07861Z" fill="#B5B5B5"/>
        </svg>
        <div className="task-filter-container_item__hidden">
          <label htmlFor="filter-rank-low">
            <input type="checkbox" id="filter-rank-low" />
            <span className="filter-task-checkbox">Низкий</span></label>
          <label htmlFor="filter-rank-medium">
            <input type="checkbox" id="filter-rank-medium" />
            <span className="filter-task-checkbox">Средний</span></label>
          <label htmlFor="filter-rank-high">
            <input type="checkbox" id="filter-rank-high" />
            <span className="filter-task-checkbox">Высокий</span></label>
        </div>
      </div>
      <Button className="primary task-filter-btn" content="Применить" />
    </form>
  )
})