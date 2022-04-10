import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";

// styles
import styles from "./taskForm.module.css";

import { ITask } from "../../interfaces/Task";

interface Props {
  btnText: string;
}

const TaskForm = ({ btnText }: Props) => {
  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [difficulty, setDifficulty] = useState<number>(0);

  const addTaskHandler = () => {};

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "title") {
      setTitle(e.target.value);
    } else {
      setDifficulty(parseInt(e.target.value));
    }
  };

  return (
    <form className={styles.form} onSubmit={addTaskHandler}>
      <div className={styles.inputGroup}>
        <label htmlFor="title">Titulo:</label>
        <input
          type="text"
          name="title"
          placeholder="Titulo da tarefa"
          onChange={handleChange}
        />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="difficulty">Dificuldade:</label>
        <input
          type="text"
          name="difficulty"
          placeholder="Dificuldade da tarefa"
          onChange={handleChange}
        />
      </div>
      <input type="submit" value={btnText} />
    </form>
  );
};

export default TaskForm;
