import React from "react";
import { ITask } from "../../interfaces/Task";

import styles from "./taskList.module.css";

interface Props {
  taskList: ITask[];
}

const TaskList = ({ taskList }: Props) => {
  return (
    <>
      {taskList.length > 0 ? (
        taskList.map((task) => (
          <div className={styles.title} key={task.id}>
            <p>{task.title}</p>
          </div>
        ))
      ) : (
        <p style={{ color: "black" }}>Sem tarefas.</p>
      )}
    </>
  );
};

export default TaskList;
