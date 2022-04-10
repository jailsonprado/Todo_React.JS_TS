import React, { useState } from "react";
import TaskForm from "../../components/TaskForm/TaskForm";
import TaskList from "../../components/TaskList/TaskList";

import styles from "./form.module.css";

// Interface
import { ITask } from "../../interfaces/Task";

const Form = () => {
  const [taskList, setTaskList] = useState<ITask[]>([]);

  return (
    <main className={styles.main}>
      <div>
        <h2>O que você vai fazer ?</h2>
        <TaskForm
          btnText="Criar Tarefa"
          taskList={taskList}
          setTaskList={setTaskList}
        />
      </div>
      <div>
        <h2>Suas Tarefas:</h2>
        <TaskList />
      </div>
    </main>
  );
};

export default Form;
