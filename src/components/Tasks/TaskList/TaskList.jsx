import React from "react";
import { List } from "../../List/List";
import { Pagination } from "../../Pagination/Pagination";
import { TaskFilter } from "../TaskFilter/TaskFilter";

export const TaskList = () => {
  return (
    <div className="task-list">
      <TaskFilter />
      <List />
      <Pagination />
    </div>
  )
}