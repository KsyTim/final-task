import React from "react";
import { useParams } from "react-router-dom";
import { TaskEvent } from "./TaskEvent/TaskEvent";
import { TaskList } from "./TaskList/TaskList";

export const Tasks = () => {
  const { event } = useParams();
  return (
    <>
      {!event ? <TaskList /> : <TaskEvent />}
    </>
  )
}