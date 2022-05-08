import React from "react";
import { ListTask } from "./ListTask/ListTask";

export const List = () => {
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="task-list-item task-tasks">
      {
        arr.map(elem => <ListTask key={elem}/>)
      }
    </div>
  )
}